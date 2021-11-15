import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards1() {
  return (
    <div className='cards'>
      <h1>Thiết bị và phụ kiện</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src='https://hanoicomputercdn.com/media/product/61305_ram_desktop_corsair_vengeance_lpx_heatspreader_cmk32gx5m2b5200c38_32gb_2x16gb_ddr5_5200mhz_1.jpg'
              text='Ram Desktop Corsair Vengeance LPX Heatspreader (CMK32GX5M2B5200C38) 32GB (2x16GB) DDR5 5200MHz'
              label='Corsair'
              path='/products'
            />
            <CardItem
              src='https://hanoicomputercdn.com/media/product/48743_hdd_laptop_western_blue_1tb.jpg'
              text='Card Sound Creative Sound Blaster Digital Music Premium HD'
              label='Blaster'
              path='/products'
            />
            <CardItem
              src='https://hanoicomputercdn.com/media/product/58797_loa_fenda_f380x.jpg'
              text='Loa Fenda F380X 2.1 Bluetooth, FM'
              label='Fenda'
              path='/products'
            />
            <CardItem
              src='https://hanoicomputercdn.com/media/product/50536_b__n_ph__m_laptop_asus_x450.jpg'
              text='Bàn phím Laptop Asus X450 (Zin)'
              label='Asus'
              path='/products'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards1;