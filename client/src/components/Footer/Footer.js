import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className='footerContainer'>
                    <div className="footer_introduce">
                    <h5 className="contact_name">Giới thiệu</h5>
                    <div className="introduce-text">
                        Tranh Của Jelly is a personal web that show and sell pictures and DIY of Jelly
                    </div>
                </div>
                <div className="footer_contact">
                        <div className="footer_contact__link">
                            <div className="footer_contact__link_item">
                                <h5 className="contact_name">Liên Kết</h5>
                                <ul>
                                    <li>Trang Chủ</li>
                                    <li>Đăng ký</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer_contact__help">
                            <h5 className="contact_name">Trợ Giúp</h5>
                            <ul>
                                <li className ="contact_name_item">Báo lỗi</li>
                                <li className ="contact_name_item">Bảo mật</li>
                                <li className ="contact_name_item">Điều lệ</li>
                                <li className ="contact_name_item">Liên hệ</li>
                            </ul>
                        </div>
                        <div className="footer_contact__contact">
                            <h5 className="contact_name">Liên hệ</h5>
                            <ul><li>Email: Onehitkillall@gmail.com</li></ul>
                        </div>
                </div>
            </div>
       </div>
    )
}

export default Footer
