'use client';
import { Separator } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const router = useRouter();
  const { register,
    handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  console.log(errors, 'errors');
  const handleLoginFunc = async (data) => {
    try {
      const { email, password } = data;

      const { data: res, error } = await authClient.signIn.email({

        email,
        password,
      
      });

      if (error) {
        toast.error("Invalid email or password");
        return;
      }

      toast.success("Login successful!");
      //     setTimeout(() => {
      //   router.push("/");
      // }, 1500);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
      console.error(err);
    }
router.push("/");
router.refresh();
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",

    })

  }
  return (

    <div className='container mx-auto bg-slate-100 min-h-[80vh] flex items-center justify-center space-y-5'>
      <div className="p-4 rounded-md bg-white">
        <h2 className='text-lg font-bold'>Login</h2>
        <form onSubmit={handleSubmit(handleLoginFunc)} className="space-y-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>

            <input
              {...register('email', { required: true })}
              type="text" className="input" placeholder="Enter your Email" />
            {errors.email && <p className='text-sm text-red-500'>Email is required</p>}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              {...register('password', { required: "password is required" })}
              type={showPassword ? "text" : "password"} className="input w-full" placeholder="Enter your Password"
            />
            <span className='absolute right-3 top-4'
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}</span>

            {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
          </fieldset>
          <Link href="/forgot-password" className="text-sm text-blue-500">
            Forgot password?
          </Link>
          <br />
          <button className="btn btn-primary w-full" type="submit">
            Login
          </button>
          <br />
        </form>
        <Separator />
        <p className="text-center">Or Login with </p>
        <Separator />
        <br></br>
        <div>
          <button onClick={handleGoogleSignIn} className="btn btn-primary
           w-full ">
            Login with Google

          </button>
        </div>
        <p className="text-sm text-muted-foreground">
          Dont have an account?{' '}
          <Link href="/register" className="underline text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;