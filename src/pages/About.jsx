import BannerAboutTwo from '../assets/banners/about-banner-two.jpg';
import BannerThree from '../assets/banners/23.jpg';
import BannerImg from '../assets/banners/about-banner-end.jpg';
import AboutImg from '../assets/banners/about-banner.jpg';
import Banner2 from '../components/Banner/Banner2';

const About = () => {
  return (
    <div>
      {/* top-banner section */}
      <div>
        <img src={AboutImg} alt="" className="h-full w-full" />
      </div>
      {/* text-banner-one section */}
      <div className="container ">
        <div className="text-center justify-center items-center p-8 ">
          <h2 className="text-4xl font-bold">Welcome to the Twinset world</h2>
          <p className="text-md m-4 p-8 text-gray-500">
            Elegance and femininity are always at the core of the Twinset style,
            in a journey showcasing a polite style that is all about the
            details, collection after collection. Couture constructions,
            precious knitwear, delicate tulle and lace create a dreamy boho
            language that renews every season.
          </p>
        </div>
        {/* double-banner-section */}

        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 py-8 space-y-2">
          <img src={BannerThree} alt="banner-double" className="" />

          <div className="text-md text-center space-y-2">
            <h4 className="text-3xl font-bold">
              Twinset <span className="text-primary uppercase">world</span>
            </h4>
            <p className="tracking-wide leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A ratione
              natus expedita facere! Delectus quisquam saepe ducimus quos
              exercitationem similique nesciunt eum consequatur adipisci.
              Sapiente facilis iusto ea vitae eum.
            </p>
            <p className="tracking-wide leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et atque
              velit nobis ipsam odit quibusdam facilis itaque illo nesciunt,
              nulla similique fugit eaque neque perspiciatis soluta. Quam
              quisquam rem corporis!
            </p>
          </div>
        </div>
        {/* mid-image banner section */}
        <div>
          <img src={BannerAboutTwo} />
        </div>
      </div>
      {/* second-text-banner section */}
      <div className=" container text-md text-center justify-center items-center space-y-6 py-10 ">
        <p className="">
          Elegance and femininity are always at the core of the Twinset style,
          in a journey showcasing a polite style that is all about the details,
          collection after collection. Couture constructions, precious knitwear,
          delicate tulle and lace create a dreamy boho language that renews
          every season.
        </p>
        <div className="">
          <button className="bg-black text-white uppercase px-8 py-2">
            start shopping
          </button>
        </div>
      </div>
      {/* last banner section */}
      <div className="bg-cover bg-center ">
        <img src={BannerImg} alt="" className="h-full w-full" />
      </div>
      {/* news banner */}
      <Banner2 />
    </div>
  );
};

export default About;
