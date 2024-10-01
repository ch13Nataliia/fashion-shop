import { SlArrowRight } from 'react-icons/sl';

const Banner2 = () => {
  return (
    <div className="container my-14 font-playfair ">
      <div className=' flex bg-[#f9f9f9] py-14 md:py-24 justify-center items-center'>
        {/* brand info */}
        <div className='flex flex-col justify-center text-center space-y-8 lg:px-44'>
          <h1 className='text-3xl lg:text-4xl font-bold '>
            TWINSET <span className="text-primary">News</span>{' '}
          </h1>
          <p className=''>
            Register to stay up to date on the latest TWINSET news and offers.
            Privacy Policy
          </p>
       
            <div className='flex justify-center'>
              <input
                type="e-mail"
                placeholder="e-mail"
                className=" py-2 px-4 border-2 border-primary rounded-l-md"
              />
                 <div className='bg-primary text-white font-semibold py-3 px-6 rounded-r-md'>
              <SlArrowRight />
            </div>
            </div>

         
       
          <p className="text-xs">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
