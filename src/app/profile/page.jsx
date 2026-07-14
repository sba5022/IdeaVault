'use client';

import React from 'react';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const MyProfile = () => {
  const { data: session } = authClient.useSession();



  const user = session?.user;


  return (
    <div className="container mx-auto p-6 bg-slate-200 rounded-lg shadow space-y-6 mb-10">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      {user?.image && (
        <Image
          src={user?.image}
          alt={user?.name || 'User'}
          width={100}
          height={100}
          className="rounded-md mb-4"
        />
      )}

      <div className="space-y-2">
        <p>
          <strong>Name:</strong> {user?.name}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        
        <p>
          <strong>Photo_URL:</strong> {user?.image}
        </p>
      </div>
      <button className="btn btn-neutral"><Link href="/edit-profile">Update Profile</Link></button>
    </div>
  );
};

export default MyProfile;