const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand info */}
        <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
          <div className="text-center md:tex-left space-y-6">
            <h1 className="uppercase font-bold text-5xl lg:text-6xl leading-relaxed xl:leading-normal">
              Twinset <span className="text-primary text-xs">milano</span>
            </h1>
            <p className="xl:max-w-[500px]">Perfect tailoring</p>
            <p>
              <span className="text-primary">FW24</span> collection
            </p>
            
          </div>
        </div>

        {/* Hero Image */}
      </div>
    </section>
  );
};

export default Hero;
