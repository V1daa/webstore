import React from "react";

import Image from "next/image";

const Package = () => {
  return (
    <div>

      <div className="w-[904px] h-[770px] bg-text-grey/[.18] rounded-2xl  ml-[25vw]  overflow-hidden">
        <div className="flex justify-center">
          <h1 className="text-text-grey text-5xl mt-6 overflow-hidden">
            Delivery
          </h1>
        </div>
        <div className="flex flex-col items-start ml-10 mt-3">
          <h2 className="text-text-grey text-xl mt-5">City</h2>
          <input
            type="text"
            className="bg-text-grey/[.18] rounded-2xl w-[43vw] mt-3 pl-3"
          ></input>
          <h2 className="text-text-grey text-xl mt-5">Address</h2>
          <input
            type="text"
            className="bg-text-grey/[.18] rounded-2xl w-[43vw] mt-3 pl-3"
          ></input>
          <h2 className="text-text-grey text-xl mt-5">Name</h2>
          <input
            type="text"
            className="bg-text-grey/[.18] rounded-2xl w-[43vw] mt-3 pl-3"
          ></input>
          <div className="bg-text-grey/[.18] rounded-2xl w-[43vw] h-[323px] mt-10">
            <div className="flex flex-row justify-between">
              <h1 className="ml-20 mt-36 text-text-grey text-4xl overflow-hidden">
                Total: 102$
              </h1>
              <div className="flex flex-col">
                <div className="flex flex-row items-center mt-8">
                  <Image src="/Spider.png" alt="#" width={100} height={100} />
                  <h1 className="text-text-grey ml-4 mr-6">
                    x1 Marvel's Spider-Man{" "}
                    <span className="text-text-yellow ml-10">$51</span>
                  </h1>
                </div>
                <div className="flex flex-row items-center mt-8">
                  <Image src="/Spider.png" alt="#" width={100} height={100} />
                  <h1 className="text-text-grey ml-4 mr-6">
                    x1 Marvel's Spider-Man{" "}
                    <span className="text-text-yellow ml-10">$51</span>
                  </h1>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-text-yellow w-[301px] h-[57px] rounded-2xl absolute flex justify-center items-center bottom-8 text-[#000] text-2xl"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Package;
