import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SlideLeft } from '../../utility/animation';
// import HeroImg from '../../assets/images/bg-hero-1.jpg'
const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] text-white">
        {/* Brand info */}
        <div className="flex flex-col justify-center md:py-0 font-playfair">
          <div className="text-center space-y-2">
            <motion.h1
              variants={SlideLeft(0.5)}
              initial="hidden"
              animate={'visible'}
              viewport={{ once: true }}
              className="uppercase font-bold text-5xl lg:text-6xl leading-relaxed xl:leading-normal"
            >
              Twinset <span className="text-primary text-sm">milano</span>
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.7)}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: true }}
              className="xl:max-w-[500px] text-3xl"
            >
              Perfect tailoring
            </motion.p>
            <p className=" text-2xl">
              <span className="text-primary">FW24</span> collection
            </p>
            {/* button section */}
            <motion.div  variants={SlideLeft(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex justify-center gap-6">
              <button className="primary-btn flex items-center gap-2 ">
                Order NOW
              </button>
              <button className="border-2 border-primary  rounded-lg font-bold  px-5 flex gap-2 justify-center items-center hover:!scale-110 duration-300">
                <FaPlay />
                Watch NOW
              </button>
            </motion.div>
          </div>
        </div>

        {/* Hero Image */}
        {/* <div className="flex justify-center items-center">
          <img src={HeroImg} alt="hero-banner" className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
