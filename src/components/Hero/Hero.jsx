import { FaPlay } from 'react-icons/fa';
// import HeroImg from '../../assets/images/bg-hero-1.jpg'
const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] text-white">
        {/* Brand info */}
        <div className="flex flex-col justify-center md:py-0 font-playfair">
          <div className="text-center space-y-2">
            <h1 className="uppercase font-bold text-5xl lg:text-6xl leading-relaxed xl:leading-normal">
              Twinset <span className="text-primary text-sm">milano</span>
            </h1>
            <p className="xl:max-w-[500px] text-3xl">Perfect tailoring</p>
            <p className=" text-2xl"><span className='text-primary'>FW24</span> collection</p>
            {/* button section */}
            <div className="flex justify-center items-center  gap-8  !mt-4">
              <button className="primary-btn flex items-center gap-2 ">
                Order NOW
              </button>
              <button className=" flex gap-2 justify-center items-center">
                <FaPlay />
                Watch NOW
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        {/* <div className="flex justify-center items-center">
          <img src={HeroImg} alt="hero-banner" className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
