import React from 'react';
import './Footer.css';
import {AiFillFacebook,AiFillTwitterSquare} from 'react-icons/ai';
import {FaInstagramSquare,FaYoutubeSquare} from 'react-icons/fa';
function Footer() {
    return (
        <div className='Footer'>
            <div className='wrapper-footer'>
                <div className='footer_des'>Copyright 2021 © DuyHiep.NET
                    Xem phim mới miễn phí nhanh chất lượng cao. Xem Phim online
                    Việt Sub, Thuyết minh, lồng tiếng chất lượng HD. Xem phim nhanh online chất lượng cao
                </div>
                <div className='footer_contact'>
                    Email liên hệ:
                    DUY&HIEP@gmail.com
                </div>
                <div className='footer_logo'>
                    <AiFillFacebook className='footer_logo_icon'/>
                    <FaInstagramSquare className='footer_logo_icon'/>
                    <AiFillTwitterSquare className='footer_logo_icon'/>
                    <FaYoutubeSquare className='footer_logo_icon'/>
                </div>
            </div>
        </div>
    )
}

export default Footer
