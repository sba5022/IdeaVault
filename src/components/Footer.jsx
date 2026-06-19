import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>
             <footer className="bg-base-200 text-base-content mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Platform Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Platform</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/ideas" className="link link-hover">
                Ideas
              </Link>
            </li>
            <li>
              <Link href="/categories" className="link link-hover">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="link link-hover">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <p className="text-sm">Email: support@ideavault.com</p>
          <p className="text-sm">Phone: +880 1234 567890</p>
          <p className="text-sm">Location: Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>

          <div className="flex gap-4">
            <a className="btn btn-circle "  href="#"><FaFacebook  className='h-50 w-50'/>
              <svg  className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775..." />
              </svg>
            </a>

            <a className="btn btn-circle " href="#"><RiTwitterXFill  className='h-50 w-50'/>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245..." />
              </svg>
            </a>

            <a className="btn btn-circle " href="#"><FaLinkedinIn  className='h-10 w-10 items-center'/>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85..." />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-base-300">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm">
          © {new Date().getFullYear()} IdeaVault. All rights reserved.
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;