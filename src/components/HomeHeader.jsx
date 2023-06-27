import React from 'react';
import logo from '../assets/vulcan.png';
import { FaBars, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomeHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" px-6 flex items-center justify-between bg-black lg:h-[90px] ">
      <div className="flex items-center gap-0">
        <img src={logo} alt="" className=" cursor-pointer w-[15rem]" />
      </div>
      <div>
        <FaBars
          size={28}
          className="text-white md:hidden cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>

      <div className="text-white text-[1.2rem] gap-8 px-8 cursor-pointer hidden md:flex   ">
        <ul className="flex gap-6">
          <li>ETH Extravaganza</li>
          <li>Sacrifice Checker</li>
          <li>Leaderboard</li>
        </ul>
        <Link
          to="/wallets"
          className="bg-[#f28b40] px-3 py-1 rounded-2xl text-[1rem ] font-semibold"
        >
          Connect Wallet
        </Link>
      </div>

      {open && (
        <div
          className="w-[350px] h-screen flex flex-col items-center fixed bg-black right-0 
        transition-all delay-200 duration-150  top-0 z-50 text-white pt-[3rem]"
        >
          <FaTimesCircle
            size={27}
            className="absolute right-8 cursor-pointer"
            onClick={() => setOpen(false)}
          />
          <ul className="flex flex-col text-[1.2rem] gap-7 mt-[4rem]">
            <li>ETH Extravaganza</li>
            <li>Sacrifice Checker</li>
            <li>Leaderboard</li>
          </ul>
          <Link
            to="/wallets"
            className="bg-[#f28b40]  rounded-2xl mt-[5rem] py-3 w-[50%] text-center 
             font-semibold"
          >
            Connect Wallet
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomeHeader;
