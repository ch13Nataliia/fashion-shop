// import React from 'react'
import { SiShopware } from 'react-icons/si';
import { NavbarMenu } from '../mockData/data';

const Header = () => {

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-2">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold  py-2">
            <SiShopware fill="orange" />
            <p>NT_Coder</p>
            <p className="text-secondary uppercase">Shop</p>
          </div>
          {/* Menu section */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-700'>
             {NavbarMenu.map((item) => {
              return (
                <li key={item.id}><a href={item.link} className='inline-block py-1 px-3 hover:text-primary font-semibold'>{item.title}</a></li>
              )
             })}
            </ul>
          </div>
          {/* Icon section */}
          {/* Mobile humburger Menu section */}
        </div>
      </nav>
      {/* Mobile sidenar section */}
    </>
  );
};

export default Header;
