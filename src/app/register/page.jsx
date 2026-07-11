'use client';
import { Separator } from '@heroui/react';
import { authClient } from "@/lib/auth-client"
import Link from 'next/link';

import React from 'react';
import { useForm } from 'react-hook-form';
import { FaEyeSlash, FaEye, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
const [showPassword, setShowPassword] = React.useState(false);
   const { register,
     handleSubmit,formState: { errors } }= useForm();
   
  const handleRegisterFunc = async(data) => {

   console.log(data,'data');
   
     
   const{ name,email,password,photoURL } = data;
   console.log(name,email,password,photoURL,'data');
   const {data:res, error} = await authClient.signUp.email({
     name: name, // required
    email: email, // required
    password: password, // required
    image: photoURL, // optional
    callbackURL: "/",
   })
   console.log(res,error,'data error');
   if(error){
alert(error.message);
   }
   if(res){
alert("Registration successful! Please check your email to verify your account.");
   }
  };
const handleGoogleSignIn = async() => {
await authClient.signIn.social({
    provider: "google",

})

}
    return (
        <div className='container mx-auto bg-slate-100 min-h-[80vh] flex items-center justify-center space-y-5'>
          <div className="p-4 rounded-md bg-white">
             <h2 className='text-lg font-bold'>Register</h2>
        <form onSubmit={handleSubmit(handleRegisterFunc)}> 
             <fieldset className="fieldset">
  <legend className="fieldset-legend">Name</legend>
  
  <input 
 {...register('name',{ required: true })}
  type="text" className="input" placeholder="Enter your Name" />
  {errors.name && <p className='text-sm text-red-500'>Name is required</p>}
</fieldset>
           <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  
  <input 
 {...register('email',{ required: true })}
  type="text" className="input" placeholder="Enter your Email" />
  {errors.email && <p className='text-sm text-red-500'>Email is required</p>}
</fieldset>
<fieldset className="fieldset relative">
  <legend className="fieldset-legend">Password</legend>
  <input 
  {...register('password',{ required: "password is required" })}
  type={showPassword ? "text" : "password"} className="input" placeholder="Enter your Password" />
   <span className='absolute right-3 top-4'
   onClick={()=>setShowPassword(!showPassword)}>
    {showPassword ? <FaEyeSlash /> : <FaEye />}</span>
  {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
</fieldset>
 <fieldset className="fieldset">
  <legend className="fieldset-legend">Photo URL</legend>
  
  <input 
 {...register('photoURL',{ required: true })}
  type="text" className="input" placeholder="Enter your Photo URL" />
  {errors.photoURL && <p className='text-sm text-red-500'>Photo URL is required</p>}
</fieldset>
<button className="btn btn-primary">Register</button></form>
<div className='flex justify-center items-center gap-2'>
  <Separator/>
  <p className='whitespace-nowrap'>or sign up with</p>
  <Separator/></div>
<button className='flex gap-2 btn btn-primary' onClick={handleGoogleSignIn}>Signup with google <FaGoogle/></button>

<p className="text-sm text-muted-foreground">
  Already have an account?{' '}
  <Link href="/login" className="underline text-red-500">
    Login
  </Link>
</p>
          </div>
        </div>
    );
};

export default RegisterPage;