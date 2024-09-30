import { GiAmpleDress } from 'react-icons/gi';
import { PiPantsFill } from 'react-icons/pi';
import { FaBagShopping } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { SlideLeft } from "../../utility/animation";

const CollectionData = [
  {
    id: 1,
    title: 'Dress Collection',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: <GiAmpleDress />,
    delay: 0.3,
  },
  {
    id: 2,
    title: 'Pants Collection',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: <PiPantsFill />,
    delay: 0.3,
  },
  {
    id: 3,
    title: 'Bags Collection',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    icon: <FaBagShopping />,
    delay: 0.3,
  },
];

const Collections = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl md:text-4xl">What we offer for you</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {CollectionData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView="visible"
                key={item.id}
                className="bg-gray-100 space-y-4 p-6 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] "
              >
                <div className="text-4xl">{item.icon}</div>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collections;
