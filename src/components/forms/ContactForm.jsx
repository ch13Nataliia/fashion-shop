import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { RiCustomerService2Line } from 'react-icons/ri';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email(),
    textarea: yup.string().min(10),
  })
  .required();

const defaultValues = {
  name: '',
  email: '',
  textarea: '',
};
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve), 1000);

    console.log(data);
  };

  useEffect(() => {
    reset(defaultValues);
  }, [reset]);

  return (
    <div className="container mt-8 mb-8   max-h-screen bg-[#f9f9f9] ">
      <div className="  grid md:grid-cols-2  items-center justify-center text-left gap-14 ">
        <div className="w-full h-full max-h-[660px]">
          <div>
            <ul className="bg-[#c4a0a0]">
              {' '}
              <li className="text-lg w-full p-4 text-center border-b-2 cursor-pointer hover:bg-orange-200/50 duration-200">
                <a href="#">TWINSET For You</a>
              </li>
              <li className="text-lg w-full p-4 text-center border-b-2 cursor-pointer hover:bg-orange-200/50 duration-200">
                <a href="#">Gift Card</a>
              </li>
              <li className="text-lg w-full p-4 text-center border-b-2 cursor-pointer hover:bg-orange-200/50 duration-200">
                <a href="#">Shopping guide</a>
              </li>
              <li className="text-lg w-full p-4 text-center border-b-2 cursor-pointer hover:bg-orange-200/50 duration-200">
                <a href="#">Size guide</a>
              </li>
              <li className="text-lg w-full p-4 text-center border-b-2 cursor-pointer hover:bg-orange-200/50 duration-200">
                <a href="#">FAQs</a>
              </li>
              <li className="text-lg w-full p-4 text-center border-b-2 cursor-pointer hover:bg-orange-200/50 duration-200">
                <a href="#">Contact us</a>
              </li>
              <li className="text-lg w-full p-4 text-center border-b-2 cursor-pointer hover:bg-orange-200/50 duration-200">
                <a href="#">Payments</a>
              </li>
              <li className="text-lg w-full p-4 text-center border-b-2 cursor-pointer hover:bg-orange-200/50 duration-200">
                <a href="#">Shipping</a>
              </li>
              <li className="text-lg w-full p-4 text-center border-b-2 cursor-pointer hover:bg-orange-200/50 duration-200">
                <a href="#">Returns</a>
              </li>
            </ul>
          </div>
        </div>

        {/* right side */}
        <div className="space-y-4 w-full">
          {/* contact us info */}
          <div>
            <RiCustomerService2Line size={50} />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact US</h2>
            <p className="text-lg">We are here and ready to help! </p>
            <p className="text-lg">
              <span className="text-primary">
                Contact us to place your order
              </span>{' '}
              and for assistance with enquiries about our products and services.
            </p>
            <div>
              <p className="text-lg font-bold">Monday through Friday:</p>
              <p>9:00 alle 18:00 (CET), except holidays.</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold">Contact form</h2>
            <p>Message us: we will get back in touch as soon as we can!</p>
          </div>
          {/* // form section */}
          <form>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
         <div className='grid grid-cols-1 gap-6'>
         <label className="block">
              <span className="text-gray-700">Input (text)</span>
              <input
                className="form-input mt-1 block w-full"
                placeholder="john@example.com"
              />
            </label>
         <label className="block">
              <span className="text-gray-700">Input (email)</span>
              <input
                type="email"
                className="form-input mt-1 block w-full"
                placeholder="john@example.com"
              />
            </label>
         </div>

          </div>
            {/* name input */}
            
          </form>
        </div>S
      </div>
      {/* left side */}
    </div>
  );
};

export default ContactForm;
