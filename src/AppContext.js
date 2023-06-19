import { type } from "@testing-library/user-event/dist/type";
import { createContext, useState, useEffect } from "react";
import che_thai from "../src/imgs/Che-Thai.jpeg"
import che_khuc_bach from "../src/imgs/che-khuc-bach.jpeg"
import tra_sua1 from "../src/imgs/tra-sua.jpeg"
import tra_sua2 from "../src/imgs/tra-sua2.jpeg"
import sinh_to1 from "../src/imgs/sinh-to1.jpeg"
import sinh_to2 from "../src/imgs/sinh-to2.jpeg"
import nuoc_ep1 from "../src/imgs/nuoc_ep1.jpeg"
import nuoc_ep2 from "../src/imgs/nuoc-ep2.jpeg"
export const AppContext = createContext({})

export const AppProvider = ({ children }) => {

    const [show, setShow] = useState(false)
    const handle_click = () => {
        setShow(!show)
    }
    const handle_click_close = () => {
        setShow(false)
    }

    const [show2, setShow2] = useState(false)
    const handle_click_2 = () => {
        setShow2(!show2)
    }
    const handle_click_close_2 = () => {
        setShow2(false)
    }

    const [show3, setShow3] = useState(false)
    const handle_click_3 = () => {
        setShow3(!show3)
    }
    const close_3 = () => {
        setShow3(false)
    }

    const [showcart, setShowcart] = useState(false)
    const handle_click_showcart = () => {
        setShowcart(!show3)
    }
    const close_cart = () => {
        setShowcart(false)
    }


    const [products, setProducts] = useState([
        {
            id: 1,
            name: "che thai",
            type_product: "che",
            price: 10,
            img: che_thai


        },
        {
            id: 2,
            name: "che khuc bach",
            type_product: "che",
            price: 15,
            img: che_khuc_bach
        },
        {
            id: 3,
            name: "tra sua 1",
            type_product: "tra sua",
            price: 10,
            img: tra_sua1
        },
        {
            id: 4,
            name: "tra sua 2",
            type_product: "tra sua",
            price: 10,
            img: tra_sua2
        },
        {
            id: 5,
            name: "sinh to 1",
            type_product: "sinh to",
            price: 10,
            img: sinh_to1
        },
        {
            id: 6,
            name: "sinh to 2",
            type_product: "sinh to",
            price: 15,
            img: sinh_to2
        },
        {
            id: 7,
            name: "nuoc ep 1",
            type_product: "nuoc ep",
            price: 10,
            img: nuoc_ep1
        },
        {
            id: 8,
            name: "nuoc ep 2",
            type_product: "nuoc ep",
            price: 15,
            img: nuoc_ep2
        },
    ])

    useEffect(() => {
        if (localStorage.getItem('cart_list')) {
            setCart(JSON.parse(localStorage.getItem('cart_list')))
        }
    }, [])

    const [cart, setCart] = useState([])

    const addCart = (id) => {
        const kq = products.find((item) => item.id == id)
        const index = cart.findIndex((item) => item.id == id)
        if (index >= 0) {
            const newlist = cart;
            newlist[index]["qty"]++
            setCart(newlist)
            localStorage.setItem('cart_list', JSON.stringify(newlist))
        }
        else {
            setCart([...cart, { ...kq, qty: "1" }])
            localStorage.setItem('cart_list', JSON.stringify([...cart, { ...kq, qty: "1" }]))
        }
    }

    const delete1 = (id) => {
        const kq = cart.filter((item) => item.id !== id)
        setCart(kq)
        localStorage.setItem('cart_list', JSON.stringify(kq))
    }

    const changqty = (id, num) => {
        const kq = cart.map((item) => item.id == id && !(num == -1 && item["qty"] == 1) ? { ...item, qty: item["qty"] * 1 + num }
            // && !(item[]
            : item
        );
        setCart(kq)
        localStorage.setItem('cart_list', JSON.stringify(kq))
    };

    const quanlity = (cart.length)

    const [filteredProducts, setFilteredProducts] = useState(products);

    const filterProducts = (type) => {
        const filtered = products.filter((product) => product.type_product === type);
        setFilteredProducts(filtered);
    };
    return (
        <AppContext.Provider value={{
            handle_click, handle_click_close, show, setShow,
            handle_click_2, handle_click_close_2, show2, setShow2,
            show3, setShow3, handle_click_3, close_3, products, quanlity,
            changqty, delete1, cart, handle_click_showcart, close_cart, showcart, addCart
            ,filterProducts,filteredProducts

        }}>
            {children}
        </AppContext.Provider>
    )

}