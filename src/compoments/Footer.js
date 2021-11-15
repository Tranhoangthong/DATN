import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        © 2019. CÔNG TY TNHH CÔNG NGHỆ TIN HỌC PHI LONG. Giấy phép kinh doanh: 0400127402 - do sở KH & ĐT TP. Đà Nẵng cấp ngày: 17/09/1998. Địa chỉ: 152 - 158 Hàm Nghi, Phường Thạc Gián, Quận Thanh Khê, Đà Nẵng. 
        </p>
        <p className='footer-subscription-text'>
        Điện thoại: 02363 888 000 - 02363 816 000 - Fax: 02363 653 000. Email: danang@philong.com.vn. Chịu trách nhiệm nội dung: Nguyễn Khoa Long. All rights reserved. Xem chính sách sử dụng web
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email của bạn'
            />
            <Button buttonStyle='btn--outline'>Đăng kí</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <a to='/sign-up'>How it works</a>
            <a to='/'>Testimonials</a>
            <a to='/'>Careers</a>
            <a to='/'> Investors</a>
            <a to='/'>Terms of Service</a>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <a to='/'>Contact</a>
            <a to='/'>Support</a>
            <a to='/'>Destinations</a>
            <a to='/'>Sponsorships</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
         
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a to='/'>Instagram</a>
            <a to='/'>Facebook</a>
            <a to='/'>Youtube</a>
            <a to='/'>Twitter</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </a>
          </div>
          <small class='website-rights'>TRVL © 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;