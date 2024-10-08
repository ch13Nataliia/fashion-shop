import BannerAbout from '../components/Banner/BannerAbout';
import BannerAboutTwo from '../assets/banners/about-banner-two.jpg';
import BannerThree from '../assets/banners/23.jpg';
const bgStyle = {
  backgroundImage: `url(${BannerAboutTwo})`,
};
const About = () => {
  return (
    <div>
      {/* top-banner section */}
      <BannerAbout />
      {/* text-banner-one section */}
      <div className="container">
        <div className="text-center justify-center items-center p-14">
          <h2 className="text-5xl font-bold">Welcome to the Twinset world</h2>
          <p className="text-lg m-10">
            Elegance and femininity are always at the core of the Twinset style,
            in a journey showcasing a polite style that is all about the
            details, collection after collection. Couture constructions,
            precious knitwear, delicate tulle and lace create a dreamy boho
            language that renews every season.
          </p>
        </div>
        {/* double-banner-section */}
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 py-8">
          <div className="">
            <img src={BannerThree} alt="" />
          </div>
          <div className="sm:text-sm space-y-4">
            <h4>Title</h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione
              natus expedita facere! Delectus quisquam saepe ducimus quos
              exercitationem similique nesciunt eum consequatur adipisci.
              Sapiente facilis iusto ea vitae eum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, voluptas vero autem dolorem rerum animi voluptatum
              molestias nesciunt architecto harum, iste nulla officiis nihil!
              Commodi excepturi iste atque odit blanditiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et atque
              velit nobis ipsam odit quibusdam facilis itaque illo nesciunt,
              nulla similique fugit eaque neque perspiciatis soluta. Quam
              quisquam rem corporis!
            </p>
          </div>
        </div>
        {/* mid-image banner section */}
        <div
          className="container md:h-[750px] sm:h-[350px] bg-cover  bg-no-repeat "
          style={bgStyle}
        ></div>
      </div>
    </div>
  );
};

export default About;
