import React, {useState , useEffect} from "react";  

import './Header.css';

import { Button } from "./Button";


function Header(){
    const [click, setClick] =useState(false) ;
    const [button, setButton] =useState(true);

    const handleClick =() => setClick(!click);
    const closeMobileMenu =()=> setClick(false);

    const showButton =()=>{
        if(window.innerWidth <=960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    },[]);

    window.addEventListener('resize',showButton); 


    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                   <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL<i className="fab fa-typo3"></i>
                   </a>
                   <div className="menu-icon" onClick={handleClick}>
                       <i className={click ?'fa fa-times':'fas fa-bars'}></i>
                   </div>
                </div>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="/" className="nav-links" onClick={closeMobileMenu}>Trang chủ</a>
                    </li>
                    <li className="nav-item">
                        <a href="/services" className="nav-links" onClick={closeMobileMenu}>Sản phẩm</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Product" className="nav-links" onClick={closeMobileMenu}>Liên hệ</a>
                    </li>
                    <li className="nav-item">
                        <a href="/Product" className="nav-links" onClick={closeMobileMenu}>Đăng kí</a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="/SignUp" className="nav-links-mobile" onClick={closeMobileMenu}>Đăng nhập</a>
                    </li>
                    <input type="text" className="nav-item2" placeholder='Bạn muốn tìm sản phẩm gì ?' />
                   <Button buttonStyle='btn--outline'>Tìm kiếm</Button>
                </ul>
                
                {button && <Button buttonStyle='btn--outline'>Đăng nhập</Button>}
            </nav>
        </>
    )
}
export default Header;