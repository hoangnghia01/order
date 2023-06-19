import { Container } from "react-bootstrap";
import "./Menu.css"
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { AppContext } from "../../AppContext";
import { FcHome } from 'react-icons/fc';
import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlinePlusCircle, AiFillDelete } from "react-icons/ai";

import { MdMenuBook } from "react-icons/md";
export default function Menu() {
    const { products,filterProducts,filteredProducts
    } = useContext(AppContext)
    const { addCart, quanlity, changqty, delete1, cart, handle_click_showcart, close_cart, showcart } = useContext(AppContext)
    console.log(cart)
    return (
        <div className="menu">
            <Container>
                <div className="menu_page">
                    <div className="menu_page_top">
                        <Link to={"/home"}><FcHome /></Link>
                        <input placeholder="Bạn muốn tìm gì?"></input>
                        <div className="gio_hang" onClick={handle_click_showcart}><IoCartOutline />
                            <div className="item_quality">{quanlity}</div>
                        </div>
                    </div>
                    <div className="danh_muc">
                        <button onClick={() => filterProducts("che")}>Chè</button>
                        <button onClick={() => filterProducts("tra sua")}>Trà Sữa</button>
                        <button onClick={() => filterProducts("sinh to")}>Sinh Tố</button>
                        <button onClick={() => filterProducts("nuoc ep")}>Nước Ép</button>
                        <button onClick={() => filterProducts("banh tran")}>Bánh trán</button>
                    </div>
                    <div className="product">
                        <Row className="row">

                            {filteredProducts.map((product, index) =>
                            (
                                <Col xs={6} sm={6} lg={3} md={6} key={index}>
                                    <div className="con_product">
                                        <div className="ing_product"> <img src={product.img} alt={product.name} /></div>
                                        <div className="con_product_bottom">
                                            <div className="con_product_title">
                                                <Link to={`/san-pham/${product.id}`} className="product_name"><b><h5>{product ? product.name : ""}</h5></b></Link>
                                                <div className="product_price"><span>Giá: </span>{product ? product.price : ""} <span>đ</span></div>
                                            </div>
                                            <div className="add_cart" onClick={() => (addCart(product.id))}><AiOutlinePlusCircle /></div>
                                        </div>


                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Container>
            <div className={`cart_page ${showcart ? "activecart_page" : ""}`}>

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col">

                            <div className="cart_top"><h2>Giỏ hàng <span className="h4">({quanlity} sản phẩm)</span></h2>

                                <button className="back_menu_top" onClick={close_cart}><MdMenuBook /></button>
                            </div>



                            <div className="card">
                                <div className="cart_title">
                                    <p className="cart_img">Hình</p>
                                    <p className="cart_name">Tên</p>
                                    <p className="cart_quality">Số lượng</p>
                                    <p className="cart_price">Đơn giá</p>
                                    <p className="cart_total">Tổng</p>
                                    <p className="cart_delete"></p>
                                </div>
                                {cart.map((item) => (
                                    <div key={item.id} className="container_card">

                                        <img src={item.img} className="cart_img" />

                                        <p className="cart_name">{item.name}</p>

                                        <p className="cart_quality">
                                            <samp className="changqty" type="button" onClick={() => (changqty(item.id, -1))}>-</samp>
                                            {item.qty}
                                            <span className="changqty" type="button" onClick={() => (changqty(item.id, 1))}>+</span>
                                        </p>

                                        <p className="cart_price">${item.price}</p>

                                        <p className="cart_total">${item.qty * item.price}</p>

                                        <div className="cart_delete" type="button" onClick={() => (delete1(item.id))}><AiFillDelete /></div>


                                    </div>
                                ))}
                            </div>
                            <div className="card mb-5">
                                <div className="card-body p-4">
                                    <div className="float-end">
                                        <p className="mb-0 me-5 d-flex align-items-center">
                                            <span className="small text-muted me-2">Tổng cộng:</span> <span className="lead fw-normal">
                                                ${cart.reduce((total, item) => total + item.qty * item.price, 0)}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="cart_button">
                                <button className="cart_back_menu" onClick={close_cart}>Tiếp tục order</button>
                                <button className="cart_gui_y_cau">Gửi yêu cầu</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}