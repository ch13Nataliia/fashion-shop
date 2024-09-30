import Hero from '../components/Hero/Hero';
import BgImage from '../assets/images/bg-hero-both.jpg';
import Collections from '../components/collections/Collections';

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
};
const List = () => {
  return (
    <div>
      <div style={bgStyle}>
        <Hero />
      </div>

      <Collections />
    </div>
  );
};

export default List;
