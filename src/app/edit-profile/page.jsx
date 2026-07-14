'use client'
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';
const UpdateProfile = () => {
    const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleUpdate = async () => {
    try {
      const { data, error } = await authClient.updateUser({
        name,
        image,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Profile updated successfully!");
      console.log(data);
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };
    return (
        <div className="container mx-auto  min-h-[80vh]  items-center  space-y-5">
           <div className='bg-slate-100 p-10'> <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
             <fieldset className="fieldset">
  <legend className="fieldset-legend">Name</legend>
  
  <input
 
  type="text" className="input" placeholder="Enter your Name" 
     value={name}
            onChange={(e) => setName(e.target.value)}/>
  
</fieldset>
 <fieldset className="fieldset">
  <legend className="fieldset-legend">Image</legend>
  
  <input 
 
  type="text"
   className="input" placeholder="Enter your Image"
   value={image}
            onChange={(e) => setImage(e.target.value)} />
  
</fieldset>
<button   onClick={handleUpdate} className="btn btn-neutral ">Update Information</button>
</div>
        </div>
    );
};

export default UpdateProfile;