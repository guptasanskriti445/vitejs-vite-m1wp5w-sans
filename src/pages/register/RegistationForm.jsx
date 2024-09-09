import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerUser } from '../../redux/features/authSlice';

const schema = yup.object().shape({
  firstname: yup.string().required('First Name is required'),
  lastname: yup.string().required('Last Name is required'),
  fathername: yup.string().required('Father Name is required'),
  mothername: yup.string().required('Mother Name is required'),
  dob: yup.string().required('Date oo Birth Name is required'),
  gender: yup.string().required('Gender Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  mobilenumber: yup.number("Must be number").min(10, 'Number must be at 10 digits').required('Mobile Number is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegistationForm = () => {
 

    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });
  
    const dispatch = useDispatch();
  
    const onSubmit = (data) => {
      dispatch(registerUser(data));
      console.log(data);  // You can handle the registration logic here
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input
            {...register('firstname')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="FirstName"
          />
          <p className="text-red-500 text-xs italic">{errors.firstname?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input
            {...register('lastname')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Lastname"
          />
          <p className="text-red-500 text-xs italic">{errors.lastname?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Father Name</label>
          <input
            {...register('fathername')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Father Name"
          />
          <p className="text-red-500 text-xs italic">{errors.fathername?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Mother Name</label>
          <input
            {...register('mothername')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Mother Name"
          />
          <p className="text-red-500 text-xs italic">{errors.mothername?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
          <input
            {...register('dob')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Date of Birth"
          />
          <p className="text-red-500 text-xs italic">{errors.dob?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
          <input
            {...register('gender')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Gender"
          />
          <p className="text-red-500 text-xs italic">{errors.gender?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            {...register('email')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
          />
          <p className="text-red-500 text-xs italic">{errors.email?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
          <input
            {...register('mobilenumber')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Mobile Number"
          />
          <p className="text-red-500 text-xs italic">{errors.mobilenumber?.message}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            {...register('password')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-500 text-xs italic">{errors.password?.message}</p>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegistationForm