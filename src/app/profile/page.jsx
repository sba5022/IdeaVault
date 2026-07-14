'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const MyProfile = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-base-100 rounded-2xl shadow-xl p-6 md:p-8">

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          My Profile
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

          {/* Profile Image */}
          <div className="flex justify-center w-full md:w-auto">
            {user?.image ? (
              <Image
                src={user.image}
                alt={user.name || "User"}
                width={180}
                height={180}
                className="rounded-full border-4 border-primary object-cover"
              />
            ) : (
              <div className="w-[180px] h-[180px] rounded-full bg-base-300 flex items-center justify-center text-5xl font-bold">
                {user?.name?.charAt(0)}
              </div>
            )}
          </div>

          {/* User Info */}
          <div className="flex-1 w-full space-y-5">

            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-lg font-semibold break-words">
                {user?.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg break-words">
                {user?.email}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Photo URL</p>
              <p className="text-sm break-all">
                {user?.image}
              </p>
            </div>

            <Link href="/edit-profile">
              <button className="btn btn-primary w-full md:w-auto mt-4">
                Update Profile
              </button>
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
};

export default MyProfile;