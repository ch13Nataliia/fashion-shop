import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen  z-20"
        >
          <div className="bg-primary text-xl font-semibold uppercase  text-white py-8 m-6 rounded-xl">
            <ul className="flex flex-col justify-center items-center gap-10 ">
              <Link to={`/`} className="cursor-pointer hover:text-2xl  ">
                <li>
                  <a href="">Home</a>
                </li>
              </Link>
              <Link to={`/about`} className="cursor-pointer hover:text-2xl ">
                <li>
                  <a href="">About</a>
                </li>
              </Link>
              <Link to={`/contact`} className="cursor-pointer hover:text-2xl ">
                <li>
                  <a href="">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
