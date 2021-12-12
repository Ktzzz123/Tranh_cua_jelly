import React from 'react'

function Footer() {
    return (
        <div class="footer">
            <div className='footerContainer'>
                    <div class="footer_introduce">
                    <h5 class="contact_name">Giới thiệu</h5>
                    <div class="introduce-text">
                        Tranh Của Jelly is a personal web that show and sell pictures and DIY of Jelly
                    </div>
                </div>
                <div class="footer_contact">
                        <div class="footer_contact__link">
                            <div class="footer_contact__link_item">
                                <h5 class="contact_name">Liên Kết</h5>
                                <ul>
                                    <li>Trang Chủ</li>
                                    <li>Đăng ký</li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer_contact__help">
                            <h5 class="contact_name">Trợ Giúp</h5>
                            <ul>
                                <li class ="contact_name_item">Báo lỗi</li>
                                <li class ="contact_name_item">Bảo mật</li>
                                <li class ="contact_name_item">Điều lệ</li>
                                <li class ="contact_name_item">Liên hệ</li>
                            </ul>
                        </div>
                        <div class="footer_contact__contact">
                            <h5 class="contact_name">Liên hệ</h5>
                            <ul><li>Email: Onehitkillall@gmail.com</li></ul>
                        </div>
                </div>
            </div>
       </div>
    )
}

export default Footer
