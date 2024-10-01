import { SiShopware } from 'react-icons/si';
import { FaShippingFast } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { MdLanguage } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="container">
        {/* brand info section */}
        <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10">
          <div className="py-8 px-4 space-y-4">
            <div className="text-2xl flex items-center gap-2 font-bold  py-2">
              <SiShopware fill="orange" />
              <p className="uppercase">Twinset</p>
              <p className="text-secondary text-sm">Milano</p>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis laboriosam fuga quo molestias quis iste.
            </p>
            <div className="justufy-start space-y-4 text-sm">
              <a href="#" className="flex gap-2  items-center">
                <FaShippingFast />
                <span>United England</span>
              </a>
              <a href="#" className="flex gap-2 items-center">
                <MdLanguage />
                <span>Language: English</span>
              </a>

              <div className="space-y-4">
                <h4 className="font-bold">Follow us on</h4>
                <ul className="flex gap-4 ">
                  <li>
                    <a href="#">
                      <FaInstagram size={24} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebookF size={24} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaPinterestP size={24} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTiktok size={24} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <IoLogoYoutube size={24} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* customer care Links section */}
          <div className="py-10 px-4 space-y-4">
            <div className="space-y-6">
              <h2 className="font-bold text-lg">Customer Care</h2>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Loyalty Programm</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Payments</a>
                </li>{' '}
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Returns and Refunds</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Collections Links section */}
          <div className="py-10 px-4 space-y-4">
            <div className="space-y-6">
              <h2 className="font-bold text-lg">Collection </h2>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#">Clothing</a>
                </li>
                <li>
                  <a href="#">Bags</a>
                </li>
                <li>
                  <a href="#">Shoes</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>{' '}
                <li>
                  <a href="#">Gift Card</a>
                </li>
                <li>
                  <a href="#">Outlet</a>
                </li>
              </ul>
            </div>
          </div>

          {/* corporate Links section */}
          <div className="py-10 px-4 space-y-4">
            <div className="space-y-6">
              <h2 className="font-bold text-lg">Collection </h2>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="#">Twinset World</a>
                </li>
                <li>
                  <a href="#">Twinset Fashion Show</a>
                </li>
                <li>
                  <a href="#">Boutiques</a>
                </li>
                <li>
                  <a href="#">Outlet</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>{' '}
                <li>
                  <a href="#">Legal Area</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
