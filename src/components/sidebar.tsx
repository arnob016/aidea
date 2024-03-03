import React from 'react';
import Link from 'next/link';
import Logo from './logo';


const Sidebar: React.FC = () => {
  const logoPath = '/images/aidea.png';

  return (
    <div className="flex  w-full border-2">
        <Logo/>
        
        
    </div>
  );
};

export default Logo;
