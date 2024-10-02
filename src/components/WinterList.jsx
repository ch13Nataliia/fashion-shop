import { MdEdit } from 'react-icons/md';
import { MdDelete } from "react-icons/md";

import Lot1 from '../assets/winter_list/bag4.webp';
import Lot2 from '../assets/winter_list/bag5.webp';

import Lot3 from '../assets/winter_list/dress4.webp';

const WinterData = [
  {
    id: 1,
    category: 'bags',
    img: Lot1,
    title: 'bag1',
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus quia nobis aliquid in quibusdam eos veritatis? Minima harum veniam deleniti in culpa ",
    price: '$125',
  },
  {
    id: 2,
    category: 'bags',
    img: Lot2,
    title: 'bag2',
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus quia nobis aliquid in quibusdam eos veritatis? Minima harum veniam deleniti in culpa ",
    price: '$145',
  },
  {
    id: 3,
    category: 'dresses',
    img: Lot3,
    title: 'Midi jersey dress',
    info: "Midi jersey dress with loose boat neck with fold-over that can also be worn off-shoulder, long sleeves. Vertical seams at the front, logo embroidered with tonal thread on the cuff, fitted. ",
    price: '$179',
  },
];
const WinterList = () => {
  
   
  
  return (
    <div>
      <ul className='flex justify-center items-center space-x-6'>
        {WinterData.map((item) => (
          <div key={item.id} className='max-w-[350px] space-y-6 shadow-lg p-6'>
          <div className='text-xl font-bold uppercase'>
            <p>{item.title}</p>
          </div>
             
            <div className=''>
              <img src={item.img} alt="winter-img" />
            </div>
            <div className='text-lg text-gray-500/80'>{item.info}</div>
         <div className='flex justify-between'>
           <p>{item.category}</p>
            <p>{item.price}</p>
            <div className='flex gap-4'>
              <button onClick={() => {}}>
                <MdEdit size={24} />
              </button>
              <button>
                <MdDelete  size={24} />
              </button>
            </div>
         </div>
           
          </div>
        ))}
      </ul>
    </div>
  );
};

export default WinterList;
