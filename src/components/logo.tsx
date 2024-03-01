import React from 'react';
import Link from 'next/link';

const Logo: React.FC = () => {
    const logo = '/images/aidea.png';
    const logo2 = '/images/aidea2.png';
    const logo3 = '/images/android-aidea.png';
        

  return (
    <div className="flex flex-col border-2">
      <div className="flex w-full justify-center items-center">
        <img src={logo} alt="Logo" className='w-1/4 p-2' />
        <Link href="https://aidea.com" className='font-bold text-4xl ml-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 inline-block bg-clip-text text-transparent'>AIdea</Link>
      </div>
      <div className="flex w-full justify-center items-center">
        <img src={logo2} alt="Logo" className='w-1/4 p-2' />
        <Link href="https://aidea.com" className='font-bold text-4xl ml-2 bg-gradient-to-r from-violet-600 to-indigo-600 inline-block bg-clip-text text-transparent'>AIdea</Link>
      </div>
      <div className="flex w-full justify-center items-center">
        <img src={logo3} alt="Logo" className='w-1/4 p-2' />
        <Link href="https://aidea.com" className='font-bold text-4xl ml-2 bg-gradient-to-r from-blue-600 to-violet-600 inline-block bg-clip-text text-transparent'>AIdea</Link>
      </div>
    </div>
  );
};

export default Logo;
