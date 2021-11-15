import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Những sản phẩm mới nhất</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.hiboox.com/wp-content/uploads/2020/09/55c181dcd708636feecdd6d5cedfe6ce.jpg'
              text='Laptop Dell Inspiron 3501 70253897 (Core i5-1135G, Ram 8GB, SSD 512GB, MX330 2GB, 15.6 Inch FHD, Win 10 + Office)'
              label='Dell'
              path='/products'
            />
            <CardItem
              src='https://m.media-amazon.com/images/I/81qDKD7NnfL._AC_SL1500_.jpg'
              text='Laptop Dell Inspiron 5410 2in1 (P147G002ASL) (i7-1195G7, 16GB RAM, 512GB SSD, 14FT, MX350 VGA, W10)'
              label='Dell'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://lh3.googleusercontent.com/iqP-pIWHyXmF36ARV6Z7QR7LTaq6vdZ9M_Xf9qsl7qQv2weexZFi74LMbfcdwDj6x6hXqIjIsWkZUpjeHchIQoP642H5xPFH'
              text='Laptop LG Gram 2021 14ZD90P-G.AX51A5 (Core i5-1135G7, Ram 8Gb, SSd 256GB, màn hình 14", Free Dos)'
              label='LG'
              path='/products'
            />
            <CardItem
              src='https://m.media-amazon.com/images/I/81lWUzhyBlL._AC_SL1500_.jpg'
              text='LAPTOP ACER NITRO 5 (AN515-57-56S5) (i5-11400H, RAM 8GB, SSD 512GB, GTX1650 4GB, 15.6 FHD, Win 11 Home 64)'
              label='ACER'
              path='/products'
            />
            <CardItem
              src='https://boutikmundo.com/wp-content/uploads/2020/12/1608850794_294_MSI-Modern-14-Laptop-Intel-Core-i5.jpg'
              text='Laptop MSI Modern 14 B11MOU 848VN (Intel Core i7-1195G7, RAM 8GB, SSD 512GB, Màn Hình 14 inch FHD, Win 10, Màu Xám)'
              label='MSI'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;