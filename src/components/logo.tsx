import React from "react";
import Link from "next/link";

const Logo: React.FC = () => {
  const logoPath = "/images/aidea.png";

  return (
    <div className="flex flex-col border-2">
      <div className="flex w-full items-center justify-center">
        <img src={logoPath} alt="Logo" className="w-1/4 p-2" />
        <Link
          href="https://aidea.com"
          className="ml-2 inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent"
        >
          AIdea
        </Link>
      </div>
      <div>
        <button className="btn btn-neutral ">Neutral</button>
      </div>
      <div className="flex">
          <Link href="/price">
            <button className="rounded-lg btn bg-yellow-800 p-2 mr-2 text-white">
              Subcription
            </button>
          </Link>

          
        </div>
      <div>
        <li>
          <a>Company</a>
          <ul>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
            <li>
              <a>Privacy policy</a>
            </li>
            <li>
              <a>Press kit</a>
            </li>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Logo;
