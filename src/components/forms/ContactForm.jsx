import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col m-auto w-[300px] space-y-6"
    >
      <input
        {...register('name', {
          required: true,
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        })}
        type="text"
        placeholder="name"
        className="border-2 border-gray-30"
      />
      <input
        {...register('email', {
          required:true,
        })}
        type="email"
        placeholder="e-mail"
        className="border-2 border-gray-300 "
      />
      <textarea 
      {...register('textarea', {
        required:true,
      })}
      type="textarea"
      className="border-2 border-gray-300" />
      <button type="onSubmit" className="border-2 border-gray-300">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
