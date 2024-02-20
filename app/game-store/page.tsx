import React from "react";
import NavBar from "../components/navbar/main";
import data from "../data/data.json";
import Image from "next/image";

const GameStore = () => {
  return (
    <div>
      <NavBar />
      <div className="flex gap-40 w-full ml-20 mt-20">
        <div className="w-[326px] h-[729px] bg-text-grey/[.18] rounded-2xl">
          <h1 className="mt-6 ml-6 mb-4 text-xl text-text-grey">Categories</h1>
          <div className="flex flex-row gap-6 ml-10 mb-3">
            <input type="checkbox"></input>
            <p>Indy</p>
          </div>
          <div className="flex flex-row gap-6 ml-10 mb-3">
            <input type="checkbox"></input>
            <p>Adventure</p>
          </div>
          <div className="flex flex-row gap-6 ml-10 mb-3">
            <input type="checkbox"></input>
            <p>MMO</p>
          </div>
          <div className="flex flex-row gap-6 ml-10 mb-3">
            <input type="checkbox"></input>
            <p>Casual games</p>
          </div>
          <div className="flex flex-row gap-6 ml-10 mb-3">
            <input type="checkbox"></input>
            <p>Strategy</p>
          </div>
          <div className="flex flex-row gap-6 ml-10 mb-3">
            <input type="checkbox"></input>
            <p>Simulator</p>
          </div>
          <div className="flex flex-row gap-6 ml-10 mb-3">
            <input type="checkbox"></input>
            <p>Sport Games</p>
          </div>
          <h1 className="mt-6 ml-6 mb-4 text-xl text-text-grey">Platforms</h1>
          <div className="flex flex-row gap-6 ml-10 mb-3">
            <input type="checkbox"></input>
            <p>PC</p>
          </div>
          <div className="flex flex-row gap-6 ml-10 mb-3">
            <input type="checkbox"></input>
            <p>Playstation 4</p>
          </div>
          <div className="flex flex-row gap-6 ml-10 mb-3">
            <input type="checkbox"></input>
            <p>Xbox Series</p>
          </div>
          <div className="flex flex-row gap-6 ml-10 mb-3">
            <input type="checkbox"></input>
            <p>Nintendo Switch</p>
          </div>
          <h1 className="mt-6 ml-6 mb-4 text-xl text-text-grey">Price</h1>
          <div className="flex flex-row">
            <div className="bg-text-grey/[.18] rounded-2xl w-[103px] h-[55px] ml-6">
              <input
                type="number"
                className="bg-text-grey/[.18] border-none active:border-none rounded-2xl w-[103px] h-[55px] text-center overflow-hidden"
              ></input>
            </div>
            <div className="bg-text-grey/[.18] rounded-2xl w-[103px] h-[55px] ml-14">
              <input
                type="number"
                className="bg-text-grey/[.18] border-none active:border-none rounded-2xl w-[103px] h-[55px] text-center overflow-hidden"
              ></input>
            </div>
          </div>
          <button
            type="submit"
            className="w-[275px] h-[45px] bg-text-yellow text-[#000] rounded-3xl ml-4 mt-6"
          >
            Submit
          </button>
        </div>
        <div className="flex gap-14 flex-wrap w-4/5">
          {data.map((data, i) => (
            <div
              className="w-[269px] h-[391px] bg-text-grey/[.18] rounded-2xl flex items-center flex-col"
              key={i}
            >
              <Image
                src={data.src}
                alt={data.alt}
                width={233}
                height={236}
                className="mt-4"
              />
              <h1 className="mr-20 mt-3">{data.description}</h1>
              <h1 className="mr-32 mt-1 text-text-grey w-24 h-5 overflow-hidden">
                {data.station}
              </h1>
              <div className="flex flex-row items-center gap-10 mt-5">
                <h1 className="text-text-yellow">{"$" + data.price}</h1>
                <button
                  type="button"
                  className="w-[144px] h-[36px] bg-text-yellow rounded-2xl text-[#000]"
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameStore;
