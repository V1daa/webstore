import React from "react";

import Image from "next/image";

const User = () => {
  return (
    <div>

      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-row gap-28">
          <div className="w-[148px] h-[148px] bg-text-grey/[.18] rounded-2xl flex items-center justify-center">
            <Image src="/Lol.svg" width={100} height={100} alt="#" />
          </div>
          <div className="w-[1386px] h-[148px] bg-text-grey/[.18] rounded-2xl flex flex-row items-center gap-10 pl-10">
            <Image src="/joy.png" width={100} height={100} alt="#" />
            <Image src="/trophy.png" width={100} height={100} alt="#" />
            <Image src="/wtf.png" width={100} height={100} alt="#" />
            <div className="flex flex-row items-center gap-10 ml-[35vw]">
              <h1 className="text-text-grey text-4xl overflow-hidden">Level</h1>
              <div className="border-solid border-[#12A33E] rounded-full w-[100px] h-[100px] flex items-center justify-center">
                <h1 className="text-text-grey text-5xl overflow-hidden">47</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1644px] h-[585px] bg-text-grey/[.18] rounded-2xl mt-10">
          <div className="flex flex-row items-center justify-center gap-20">
            <div className="">
              <h1 className="text-text-grey text-5xl overflow-hidden">
                You saved 12324$ with us already!
              </h1>
            </div>
            <div className="h-[585px] w-[2px] bg-text-grey"></div>
            <div>
              <h1 className="text-text-grey text-4xl overflow-hidden ml-40 mb-20">History</h1>
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
  );
};

export default User;
