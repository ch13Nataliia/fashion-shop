import AboutImg from '../../assets/banners/about-banner.jpg';
// import { FaPlay } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { SlideLeft } from '../../utility/animation';
const bgStyle = {
  backgroundImage: `url(${AboutImg})`,
};
const BannerAbout = () => {
  return (
    <section>
       <div className=" lg:h-[1050px] md:h-[550px] sm:h-[350px] w-full  bg-cover bg-center bg-no-repeat " style={bgStyle}></div>
    </section>

   
  );
};

export default BannerAbout;
