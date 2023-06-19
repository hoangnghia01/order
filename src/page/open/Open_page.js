

import { Container } from "react-bootstrap"
import "./Open_page.css"
import hello from "../../imgs/hello.jpg"
import { Link } from "react-router-dom"
export default function Open_page() {
    return (
        <div className="open">
            <Container>
                <div className="container_open">
                    <div>
                        <img src={hello}></img>
                        <h2>CTSVN XIN CHÀO BẠN</h2>
                        <p>Mời bạn nhập tên để nhà hàng phục vụ bạn nhanh chóng và chính xác hơn</p>
                        <div className="your_name"><input placeholder="Mời bạn nhập tên" className="input_your_name"></input></div>
                        <Link to={"/home"}>
                            <button className="button_start" >Bắt đầu</button>
                        </Link>

                    </div>

                    <p className="powered_by">Powered by CTSVN.VN</p>
                </div>
            </Container>
        </div>
    )
}