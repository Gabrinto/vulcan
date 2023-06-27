import React from 'react';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    // #e78361
    <div className="h-screen bg-black pt-[3rem] lg:w-[80vw] lg:mx-auto ">
      <div>
        <h1 className="text-white text-[1.3rem] font-bold lg:text-[3rem] lg:font-bold">
          Sacrifice Checker
        </h1>
        <div className="bg-[#2e3636cc] lg:min-h-[500px] p-6">
          <input
            type="text"
            className="w-full px-2 py-2 lg:px-4 lg:py-4 bg-[#e78361]
          placeholder-white text-sm lg:text-[18px] text-white"
            placeholder="Account address"
          />
          <div className="mt-[2.4rem]">
            <Link
              to="/wallets"
              className="bg-white text-gray-900 
                     mt-8 rounded-3xl text-sm lg:text-[18px] lg:px-14 lg:py-4
            px-8 py-2"
            >
              Check Sacrifice
            </Link>
            <p className="mt-4 lg:mt-6 text-[12px] lg:text-[21px] text-white">
              VUL Total pending blockchain reconciliation
            </p>
            <div className="bg-[#e78361] flex text-white text-[12px] gap-2 lg:mt-[1rem] lg:justify-center">
              <div className="border-r-[1px] flex flex-col border-[#d46945] ">
                <div className="border-b-[1px] p-2 border-[#d46945] lg:py-6 lg:border-b-[2px] lg:text-[1.2rem]">
                  Wallet Address
                </div>
                <div className=""></div>
              </div>
              <div className="border-r-[1px] flex flex-col border-[#d46945] ">
                <div className="border-b-[1px] p-2 border-[#d46945] lg:py-6 lg:border-b-[2px] lg:text-[1.2rem]">
                  Rebased VUL (Est.)
                </div>
                <div className="py-3">0.00</div>
              </div>
              <div className="border-r-[1px] flex flex-col border-[#d46945] ">
                <div className="border-b-[1px] p-2 border-[#d46945] lg:py-6 lg:border-b-[2px] lg:text-[1.2rem]">
                  VUL Total (includes bonus)
                </div>
                <div className="py-3">0.00</div>
              </div>
              <div className="border-r-[1px] flex flex-col border-[#d46945] ">
                <div className="border-b-[1px] p-2 border-[#d46945] lg:py-6 lg:border-b-[2px] lg:text-[1.2rem]">
                  VUl Launch Price
                </div>
                <div className="py-3">$9.00</div>
              </div>
              <div className="border-r-[1px] flex flex-col border-[#d46945] ">
                <div className="border-b-[1px] p-2 border-[#d46945] lg:py-6 lg:border-b-[2px] lg:text-[1.2rem]">
                  VUL Value (USD)
                </div>
                <div className="py-3">$0.00</div>
              </div>
            </div>

            <div className="text-white">
              <h1 className="text-[0.8rem] text-left font-semibold mt-4 lg:text-[1.4rem]">
                Transactions (Confirmed)
              </h1>
              <div className="flex gap-4 text-[0.7rem] bg-[#e78361] justify-center">
                <span className="border-[#d46945] border-[1px] lg:py-4 lg:text-[1.2rem] lg:border-r-[2px] lg:px-4">
                  TimeStamps
                </span>
                <span className="border-[#d46945] border-r-[1px] p-1 flex items-center lg:py-4 lg:text-[1.2rem] lg:border-r-[2px] lg:px-4">
                  Token
                </span>
                <span className="border-[#d46945] border-r-[1px] p-1 flex items-center lg:py-4 lg:text-[1.2rem] lg:border-r-[2px] lg:px-4">
                  USD Amount
                </span>
                <span className="border-[#d46945] border-r-[1px] p-1 flex items-center lg:py-4 lg:text-[1.2rem] lg:border-r-[2px] lg:px-4">
                  Bonus
                </span>
                <span className="border-[#d46945] border-r-[1px] p-1 flex items-center lg:py-4 lg:text-[1.2rem] lg:border-r-[2px] lg:px-4">
                  Base VUL
                </span>
                <span className="border-[#d46945] border-r-[1px] p-1 flex items-center lg:py-4 lg:text-[1.2rem] lg:border-r-[2px] lg:px-4">
                  Total VUL
                </span>
                <span className="border-[#d46945] border-r-[1px] p-1 flex items-center lg:py-4 lg:text-[1.2rem] lg:border-r-[2px] lg:px-4">
                  VUL Value
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black flex justify-between w-full text-white">
          <h1 className="t-[4rem]">OOXY LABS 2023</h1>
          <h1 className="t-[4rem]">APP V 1.7</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
