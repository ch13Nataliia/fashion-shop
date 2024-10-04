















// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

// const schema = yup
//   .object({
//     title: yup.string().max(100).required(),
//     img: yup.string().url().required(),
//     bhp: yup.number().integer().positive().max(5000).required(),
//     info: yup.string().max(500).required(),
//     category: yup.string().max(200),
//     price: yup.number().required(),
//   })
//   .required();

// const defaultValues = {
//   title: '',
//   img: '',
//   bhp: '',
//   info: '',
//   category: '',
//   price: '',
// };

// export default function ItemForm() {
//   const form = useForm()
//   return (
//     <form onSubmit={() => {}} className="max-w-[500px]">
//       <div className="">
//         <label htmlFor="bhp">bhp:</label>
//         <input
//           type="bhp"
//           defaultValue={''}
//           className="border-2 border-gray-500 w-full"
//         />
//       </div>
//       <div className="">
//         <label htmlFor="title">Title:</label>
//         <input
//           type="text"
//           defaultValue={''}
//           className="border-2 border-gray-500 w-full"
//         />
//       </div>

//       <div className="">
//         <label htmlFor="info">Description:</label>
//         <textarea
//           type="text"
//           defaultValue={''}
//           className="border-2 border-gray-500 w-full h-40"
//         />
//       </div>

//       <div className="">
//         <label htmlFor="image">Image:</label>
//         <input
//           type="text"
//           defaultValue={''}
//           className="border-2 border-gray-500 w-full"
//         />
//       </div>

//       <div className="">
//         <label htmlFor="category">Category:</label>
//         <input
//           type="text"
//           defaultValue={''}
//           className="border-2 border-gray-500 w-full"
//         />
//       </div>

//       <div className="flex justify-center items-center gap-4 mt-8 mb-8">
//         <button type="reset" onClick={() => {}} className="primary-btn">
//           Reset
//         </button>
//         <button
//           type="submit"
  
//           className="primary-btn"
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// }
