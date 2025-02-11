'use client';

import React, { useState } from 'react';
import GitHubStars from './GithubStars';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

  const { theme, setTheme } = useTheme();
  const router = useRouter();


  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/40 backdrop-blur-sm border-b border-white/10 text-white py-3 lg:px-16 px-2 flex justify-between items-center z-50">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center">
          <Image
            src="/logo.png"
            className="w-8 h-8 bg-white rounded-md"
            alt='logo'
            width={8}
            height={8}
          />
        </div>
        <span
          className="text-lg md:text-xl font-bold cursor-pointer transition-colors"
          onClick={() => router.push('/landing')}
        >
          JobScrape
        </span>
      </div>

      <div className="flex items-center  w-full justify-end space-x-10 md:space-x-8">

            <GitHubStars repoUrl="https://github.com/Anuj-Gill/JobScrape" />

            <Link
              href="https://buymeacoffee.com/gillanuj12e"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              
              <img
                src='/coffee-cup.png'
                className='w-8 h-8 rounded-full'
                />
            </Link>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
      </div>


    </nav>
  );
};

export default Navbar;