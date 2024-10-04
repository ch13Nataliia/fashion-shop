import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';

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
  },[reset]);
  return (
    // form section
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col m-auto w-[300px] space-y-6"
    >
      {/* name input */}
      <input
        {...register('name')}
        aria-invalid={errors.name ? 'true' : 'false'}
        type="text"
        placeholder="name"
        className="border-2 border-gray-30"
      />
      {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      {/* email input */}
      <input
        {...register('email')}
        aria-invalid={errors.email ? 'true' : 'false'}
        type="email"
        placeholder="e-mail"
        className="border-2 border-gray-300 "
      />{' '}
      {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      {/* description input */}
      <textarea
        {...register('textarea')}
        type="textarea"
        className="border-2 border-gray-300"
      />
      {errors.textarea && (
        <p className="text-red-600">{errors.textarea.message}</p>
      )}
      {/* button section */}
      <button
        disabled={isSubmitting}
        type="submit"
        className="border-2 border-gray-300"
      >
        {isSubmitting ? 'Loading...' : 'Submit'}
      </button>
      <button
        onClick={}
        type="reset"
        className="border-2 border-gray-300"
      >
        {isSubmitting ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;
