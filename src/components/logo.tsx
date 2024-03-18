import React from "react";
import Link from "next/link";
import { LogOut, Settings, CircleHelp, Facebook, Twitter, Instagram, Github } from "lucide-react";

const Logo: React.FC = () => {
  const logoPath = "/images/aidea.png";

  return (
    <>
      <div className="flex flex-col justify-between h-screen border-2 bg-black">
        <div>
          <div className="flex w-full items-center justify-center">
            <img src={logoPath} alt="Logo" className="w-1/4 p-2" />
            <Link
              href="https://aidea.com"
              className="ml-2 inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent"
            >
              AIdea
            </Link>
          </div>
          <div className="flex w-full items-center justify-center">
            <img src={logoPath} alt="Logo" className="w-1/4 p-2" />
            <Link
              href="https://aidea.com"
              className="ml-2 inline-block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-4xl font-bold text-transparent"
            >
              AIdea
            </Link>
          </div>
          <div className="flex w-full items-center justify-center">
            <img src={logoPath} alt="Logo" className="w-1/4 p-2" />
            <Link
              href="https://aidea.com"
              className="ml-2 inline-block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-4xl font-bold text-transparent"
            >
              AIdea
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-end ">
          <div className="">
            <button className="btn btn-outline border-none">
              <Settings size={16} />
              Settings
            </button>
          </div>
          <div className="">
            <button className="btn btn-outline border-none">
              <CircleHelp size={16} />
              FAQ & Help
            </button>
          </div>
          <div className="">
            <button className="btn btn-outline border-none">
              <LogOut size={16} />
              Log Out
            </button>
          </div>
          <div className="flex items-center mt-2">
            <Link href="https://facebook.com" passHref>
              <Facebook style={{ fontSize: '20px' }} className="ml-2" />
            </Link>
            <Link href="https://twitter.com" passHref>
              <Twitter style={{ fontSize: '20px' }} className="ml-2" />
            </Link>
            <Link href="https://instagram.com" passHref>
              <Instagram style={{ fontSize: '20px' }} className="ml-2" />
            </Link>
            <Link href="https://github.com" passHref>
              <Github style={{ fontSize: '20px' }} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
