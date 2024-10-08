import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Lot1 from '../assets/winter_list/bag4.webp';
import Lot2 from '../assets/winter_list/bag5.webp';

import Lot3 from '../assets/winter_list/dress4.webp';

const WinterData = [
  {
    _id: 1,
    category: 'bags',
    img: Lot1,
    bhp: 12,
    title: 'bag1',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus quia nobis aliquid in quibusdam eos veritatis? Minima harum veniam deleniti in culpa ',
    price: '$125',
  },
  {
    _id: 2,
    category: 'bags',
    img: Lot2,
    bhp: 13,
    title: 'bag2',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus quia nobis aliquid in quibusdam eos veritatis? Minima harum veniam deleniti in culpa ',
    price: '$145',
  },
  {
    _id: 3,
    category: 'dresses',
    img: Lot3,
    bhp: 14,
    title: 'Midi jersey dress',
    info: 'Midi jersey dress with loose boat neck with fold-over that can also be worn off-shoulder, long sleeves. Vertical seams at the front, logo embroidered with tonal  cuff. ',
    price: '$179',
  },
];
const WinterList = () => {
  return (
    <div className='container m-8'>
      <ul className="grid md:grid-cols-3 sm:grid-cols-2 justify-center items-center space-x-6 p-10">
        {WinterData.map(
          ({ _id, title, img, bhp, info, category, price }, i) => (
            <div key={i} className="max-w-[350px] max-h-[850px] space-y-6 shadow-lg p-6">
              <div className="text-xl font-bold uppercase">
                <p>
                  {title} BHP: {bhp}
                </p>
              </div>

              <div className="">
                <img src={img} alt="winter-img" />
              </div>
              <div className="text-lg text-gray-500/80">{info}</div>
              <div className="flex justify-between">
                <p>{category}</p>
                <p>{price}</p>
                <div className="flex gap-4">
                  <Link to={`/update/${_id}`}>
                    <button>
                      <MdEdit size={24} />
                    </button>
                  </Link>

                  <button onClick={() => console.log(`delete ${_id}`)}>
                    <MdDelete size={24} />
                  </button>
                </div>
              </div>
            </div>
          ),
        )}
      </ul>
    </div>
  );
};

export default WinterList;
