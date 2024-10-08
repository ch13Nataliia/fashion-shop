import Dress1 from '../assets/dress/dress1/dress1.webp';
import Dress2 from '../assets/dress/dress2/dress2_1.webp';
import Dress3 from '../assets/dress/dress3/dress3_1.webp';
import Dress4 from '../assets/dress/dress4/dress4_1.webp';
import Jeans1 from '../assets/jeans/jeans1/jeans1_1.webp';
import Jeans2 from '../assets/jeans/jeans2/jeans2_1.webp';
import Bag1 from '../assets/bags/bag1/bag1.webp';
import Test1 from '../assets/testimonial/jack.jpg';
import Test2 from '../assets/testimonial/olivia.webp';
import Test3 from '../assets/testimonial/linda.jpg';

export const NavbarMenu = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
  },
  {
    id: 3,
    title: 'FW24-Collection',
    link: '/winterCollection',
  },
  {
    id: 4,
    title: 'Add',
    link: '/add',
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact',
  },
];

export const ProductsData = [
  {
    id: 1,
    category: 'Dresses',
    image: Dress1,
    title: 'Dress 1',
    info: 'info',
    price: '$109',
  },
  {
    id: 2,
    category: 'Dresses',
    image: Dress2,
    title: 'Dress 2',
    info: 'info',
    price: '$255',
  },
  {
    id: 3,
    category: 'Dresses',
    image: Dress3,
    title: 'Dress 3',
    info: 'info',
    price: '$ 175',
  },
  {
    id: 4,
    category: 'Dresses',
    image: Dress4,
    title: 'Dress 4',
    info: 'info',
    price: '$209',
  },
  {
    id: 5,
    category: 'Jeans',
    image: Jeans1,
    title: 'Jeans 1',
    info: 'info',
    price: '$135',
  },
  {
    id: 6,
    category: 'Jeans',
    image: Jeans2,
    title: 'Jeans 2',
    info: 'info',
    price: '$175',
  },
  {
    id: 7,
    category: 'Bags',
    image: Bag1,
    title: 'Bag 1',
    info: 'info',
    price: '$226',
  },
];

export const TestimonialsData = [
  {
    id: 1,
    name: 'Jack Rassel',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Excepturi sunt atque esse dolorem.',
    img: Test1,
    delay: 0.2,
  },
  {
    id: 2,
    name: 'Olivia Joe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt atque esse dolorem.',
    img: Test2,
    delay: 0.4,
  },
  {
    id: 3,
    name: 'Linda Smith',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Excepturi sunt atque esse dolorem.',
    img: Test3,
    delay: 0.6,
  

  },
];
