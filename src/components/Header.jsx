import React from 'react'
import { SiShopware } from 'react-icons/si';
import { GoSearch } from 'react-icons/go';
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";


import { NavbarMenu } from '../mockData/data';
import ResponsiveMenu from './ResponsiveMenu';

const Header = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-2">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold  py-2">
            <SiShopware fill="orange" />
            <p className='uppercase'>Twinset</p>
            <p className="text-secondary text-sm">Milano</p>
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-700">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icon section */}
          <div className='flex items-center gap-4'>
            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2'>
              <GoSearch />
            </button>
            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2'>
              <FaShoppingBasket  />
            </button>
            <button className='text-primary text-2xl hover:bg-primary hover:text-white rounded-md px-6 py-2 border-2 border-primary font-semibold duration-200 hidden md:block '>
            <MdOutlineLogin />

            </button>
          </div>
          {/* Mobile humburger Menu section */}
          <div className='md:hidden' onClick={() => setOpen(!open)}>
          <GiHamburgerMenu className='text-2xl'/>
          </div>
        </div>
      </nav>
      {/* Mobile sidenar section */}
      <ResponsiveMenu open={open}/>
    </>
  );
};

export default Header;
