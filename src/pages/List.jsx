import Hero from '../components/Hero/Hero';
import BgImage from '../assets/images/bg-hero-both.jpg';
import Collections from '../components/collections/Collections';
import Banner from '../components/Banner/Banner';
import Img1 from '../assets/banners/banner1.webp';
import Img2 from '../assets/banners/banner2.jpg';
import TabSection from '../components/Tab/TabSection';
import Testimonials from '../components/Testimonials/Testimonials';
import Banner2 from '../components/Banner/Banner2';
const BannerData = 
  {
    id: 1,
    image: Img1,
    title: 'The BEST winter collection 2024',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt itaque cumque quo officia odio nisi, dolor quam tenetur corrupti aliquam eius! Reiciendis dolor porro iure nam architecto quas odio dignissimos!  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt itaque cumque quo officia odio nisi, dolor quam tenetur corrupti aliquam eius! Reiciendis dolor porro iure nam architecto quas odio dignissimos!',
    link: '#',
  }

const Banner2Data = {
  image: Img2,
    title: 'The BEST winter collection 2024',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt itaque cumque quo officia odio nisi, dolor quam tenetur corrupti aliquam eius! Reiciendis dolor porro iure nam architecto quas odio dignissimos!  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt itaque cumque quo officia odio nisi, dolor quam tenetur corrupti aliquam eius! Reiciendis dolor porro iure nam architecto quas odio dignissimos!',
    link: '#',
  }
;
const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // backgroundAttachment: 'fixed',
};
const List = () => {
  return (
    <div>
      <div style={bgStyle}>
        <Hero />
      </div>
      <Collections />
      <Banner {... BannerData}/>
      <TabSection />

      <Banner{... Banner2Data}/>
      <Testimonials />
      <Banner2 />
    </div>
  );
};

export default List;
