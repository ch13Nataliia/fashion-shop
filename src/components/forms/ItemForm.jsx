import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  title: yup.string().max(100).required(),
  img: yup.string().url().required(),
  bhp: yup.number().integer().positive().max(5000).required(),
  info: yup.string().max(500).required(),
  category: yup.string().max(200),
  price: yup.number().required(),
}).required();

const ItemForm = () => {
  return <div>itemb form</div>;
};

export default ItemForm;
