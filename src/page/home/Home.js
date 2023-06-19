import { Container } from "react-bootstrap";
import "./Home.css"
import { BsFillPinMapFill, BsFillCreditCard2FrontFill } from 'react-icons/bs';
import { IoFastFoodOutline } from 'react-icons/io5';
import { FcAssistant, FcCurrencyExchange, FcAbout, FcTwoSmartphones } from 'react-icons/fc';

import { GiTakeMyMoney } from 'react-icons/gi';
import hello from "../../imgs/hello.jpg"
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
export default function Home() {
    
    const { handle_click, handle_click_close, show, setShow,
        handle_click_2, handle_click_close_2, show2, setShow2,
        show3, setShow3, handle_click_3, close_3 } = useContext(AppContext)
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const handleRatingClick = (value) => {
        setRating(value);
    };

    const handleMouseEnter = (value) => {
        setHover(value);
    };

    const handleMouseLeave = () => {
        setHover(null);
    }
    const tableNumber = localStorage.getItem("tableNumber");

    return (
        <div className="page_hone">
            <Container>
                <div className="home_page">
                    <h2 className="company_name">CTSVN.VN</h2>
                    <p className="address"><BsFillPinMapFill />  <span>Số 50/3/15 TL 29, p. Thạnh Lộc, quận 12</span></p>
                    <div className="company_img"><img src={hello} /></div>
                    <h4 className="home_page_hello">Chào bạn</h4>

                    <div className="home_page_table">
                        <p>
                            Bạn đang ngồi bàn
                        </p>
                        <span className="number_table">10</span>
                    </div>
                    
                    <div className="button_call">
                        <div className="call_bill" onClick={handle_click}>
                            <FcCurrencyExchange className="call_icon" />
                            <p>Gọi thanh toán</p>
                        </div>



                        <div className="call" onClick={handle_click_2}>
                            <FcAssistant className="call_icon" />
                            <p>Gọi nhân viên</p>
                        </div>
                        <div className="call_comment" onClick={handle_click_3}>
                            <FcAbout className="call_icon" />
                            <p>Đánh giá</p>
                        </div>
                    </div>
                    <Link to={"/home/menu"} className="view_menu">
                        <IoFastFoodOutline className="view_menu_icon" />
                        <p>Xem menu - gọi món</p>
                    </Link>
                </div>
            </Container>
            <div className={`menu_thanh_toan ${show ? "activemenu_thanh_toan" : ""}`}>
                <div className="close_menu_thanh_toan" onClick={handle_click_close}>
                </div>

                <div className="menu_thanh_toan_content">
                    <Container>
                        <h3>Gọi thanh toán</h3>
                        <p>Bạn muốn thanh toán bằng?</p>
                        <div>
                            <div className="thanhtoan_button">

                                <label htmlFor="thanhtoan1"><GiTakeMyMoney className="thanhtoan_icon" /> Thanh toán bằng tiền mặt</label>
                                <input
                                    type="radio"
                                    id="thanhtoan1"
                                    name="fav_language"
                                    value="HTML"
                                    checked={selectedOption === 'HTML'}
                                    onChange={handleOptionChange}
                                />


                            </div>
                            <div className="thanhtoan_button">
                                <label htmlFor="thanhtoan2"><BsFillCreditCard2FrontFill className="thanhtoan_icon" />Thanh toán bằng thẻ</label>
                                <input
                                    type="radio"
                                    id="thanhtoan2"
                                    name="fav_language"
                                    value="CSS"
                                    checked={selectedOption === 'CSS'}
                                    onChange={handleOptionChange}
                                />


                            </div>
                            <div className="thanhtoan_button">
                                <label htmlFor="thanhtoan3"><FcTwoSmartphones className="thanhtoan_icon" />Ứng dụng điện thoại</label>
                                <input
                                    type="radio"
                                    id="thanhtoan3"
                                    name="fav_language"
                                    value="JavaScript"
                                    checked={selectedOption === 'JavaScript'}
                                    onChange={handleOptionChange}
                                />

                            </div>

                        </div>
                        <div>
                            <button className="gui_y_cau">Gửi yêu cầu</button>
                        </div>
                    </Container>
                </div>


            </div>
            <div className={`menu_goi_nhanvien ${show2 ? "activemenu_goi_nhanvien" : ""}`}>
                <div className="close_menu_goi_nhanvien" onClick={handle_click_close_2}></div>
                <div>

                    <div className="menu_goi_nhanvien_content">
                        <Container>
                            <h3>Gọi nhân viên</h3>
                            <p>Bạn muốn gọi nhân viên làm gì?</p>
                            <input placeholder="Lấy muỗn đũa, lấy thêm ly,..."></input>
                            <div>
                                <button className="gui_y_cau">Gửi yêu cầu</button>
                            </div>
                        </Container>
                    </div>

                </div>
            </div>
            <div className={`menu_danh_gia ${show3 ? "activemenu_danh_gia" : ""}`}>
                <div className="close_menu_danh_gia" onClick={close_3}></div>
                <div>

                    <div className="menu_danh_gia_content">
                        <Container>
                            <h3>Trải nghiệm hôm nay của bạn như thế nào
                            </h3>
                            <div>
                                {[...Array(5)].map((star, index) => {
                                    const starValue = index + 1;
                                    return (
                                        <label
                                            key={index}
                                            onMouseEnter={() => handleMouseEnter(starValue)}
                                            onMouseLeave={handleMouseLeave}
                                            onClick={() => handleRatingClick(starValue)}
                                        >
                                            <input
                                                type="radio"
                                                name="rating"
                                                value={starValue}
                                                style={{ display: 'none' }}
                                            />
                                            <span
                                                className={starValue <= (hover || rating) ? 'star filled' : 'star'}
                                                style={{ color: starValue <= (hover || rating) ? 'yellow' : 'gray' }}
                                            >
                                                &#9733;
                                            </span>
                                        </label>
                                    );
                                })}

                            </div>
                            <p className="banchuahailong">
                                Bạn có điều gì chưa hài lòng phải không?
                            </p>
                            <div className="danhgia_mau">
                                <p>
                                    Vệ sinh không sạch sẽ
                                </p>
                                <p>
                                    Nhân viên không nhiệt tình
                                </p>
                                <p>
                                    Món ăn không ngon
                                </p>
                                <p>
                                    Món ăn phục vụ lâu
                                </p>
                                <input placeholder="Lý do khác" className="button_ly_do_khac"></input>
                            </div>
                        </Container>
                        <div className="gui_danh_gia_container">
                            <Container>
                                <p>Nhà hàng rất trân trọng và mong muốn phản hồi lại đánh giá trên, bạn vui lòng để lại số điện thoại nhé</p>
                                <div className="gui_danh_gia_container_gui">
                                    <input placeholder="Số điện thoại của bạn" className="gui_danh_gia_container_gui_input"></input>
                                    <button className="gui_danh_gia_container_gui_button">Gửi đánh giá</button>
                                </div>
                            </Container>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}