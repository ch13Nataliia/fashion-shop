import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    title: yup.string().max(100).required(),
    img: yup.string().url().required(),
    bhp: yup.number().integer().positive().max(5000).required(),
    info: yup.string().max(500).required(),
    category: yup.string().max(200),
    price: yup.number().required(),
  })
  .required();

const defaults = {
  title: '',
  img: '',
  bhp: '',
  info: '',
  category: '',
  price: '',
};
export default function ItemForm({ item, submitHandler }) {
  const {
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: item || defaults,
  });

  useEffect(() => {
    if (item) {
      reset(item);
    }
  }, [item, reset]);

  let submitFn = (vals) => {
    reset();
    item ? submitHandler(item_id, vals) : submitHandler(vals);
  };

  return (
    <form onSubmit={handleSubmit(submitFn)} className='max-w-[500px]'>
      <div className="">
        <label htmlFor="bhp">bhp:</label>
        <input
          type="bhp"
          defaultValue={''}
          pattern={/[0-9]{1,4}/}
          className="border-2 border-gray-500 w-full"
        />
        {errors.bhp && <div className="text-red-500">{errors.bhp}</div>}
      </div>
      <div className="">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          defaultValue={''}
          className="border-2 border-gray-500 w-full"
        />
        {errors.title && <div className="text-red-500">{errors.title}</div>}
      </div>

      <div className="">
        <label htmlFor="info">Description:</label>
        <textarea
          type="text"
          defaultValue={''}
          className="border-2 border-gray-500 w-full h-40"
        />
        {errors.info && <div className="text-red-500">{errors.info}</div>}
      </div>

      <div className="">
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          defaultValue={''}
          className="border-2 border-gray-500 w-full"
        />
        {errors.img && <div className="text-red-500">{errors.img}</div>}
      </div>

      <div className="">
        <label htmlFor="category">Category:</label>
        <input
          type="number"
          defaultValue={''}
          className="border-2 border-gray-500 w-full"
        />
        {errors.category && (
          <div className="text-red-500">{errors.category}</div>
        )}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8 mb-8">
        <button className="primary-btn">Reset</button>
        <button className="primary-btn">Submit</button>
      </div>
    </form>
  );
}
