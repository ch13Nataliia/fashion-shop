import { SlArrowRight } from 'react-icons/sl';
import { motion } from 'framer-motion';
import { SlideLeft } from '../../utility/animation';

const Banner2 = () => {
  return (
    <div className="container my-14 font-playfair ">
      <div className=" flex bg-[#f9f9f9] py-14 md:py-24 justify-center items-center">
        {/* brand info */}
        <div className="flex flex-col justify-center text-center space-y-8 lg:px-44">
          <motion.h1
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{once: true}}
            className="text-3xl lg:text-4xl font-bold "
          >
            TWINSET <span className="text-primary">News</span>{' '}
          </motion.h1>
          <motion.p
            variants={SlideLeft(0.7)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{once: true}}
            
            className="text-xl"
          >
            Register to stay up to date on the latest TWINSET news and offers.
            Privacy Policy
          </motion.p>

          <div className="flex justify-center">
            <motion.input
             variants={SlideLeft(0.5)}
          initial = "hidden"
          whileInView={"visible"}
          viewport={{once: true}}
              type="e-mail"
              placeholder="e-mail"
              className=" py-2 px-4 border-2 border-primary rounded-l-md"
            />
            <motion.div
             variants={SlideLeft(0.5)}
          initial = "hidden"
          whileInView={"visible"}
          viewport={{once: true}}
             className="bg-primary text-white font-semibold py-3 px-6 rounded-r-md">
              <SlArrowRight />
            </motion.div>
          </div>

          <motion.p
           variants={SlideLeft(0.8)}
          initial = "hidden"
          whileInView={"visible"}
          viewport={{once: true}}
          
           className="text-xs">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
