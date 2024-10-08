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
       <div className=" h-[750px] bg-cover   bg-no-repeat " style={bgStyle}></div>
    </section>

   
  );
};

export default BannerAbout;
