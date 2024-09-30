const Banner = ({ image, title, subtitle, link }) => {
  return (
    <div className="container">
      <div className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 ">
        {/* Banner image section */}
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt="banner-img-list"
            className="w-[300px] md:max-w-[400px] xl:min-w-[600px] h-full object-cover"
          />
        </div>
        {/* Banner text section */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
          <p className="text-2xl lg:text-4xl font-bold capitalize font-playfair">
            {title}
          </p>
          <p>{subtitle}</p>
          <div className="flex justify-center md:justify-start">
            <button className="primary-btn">Explore</button>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Banner;
