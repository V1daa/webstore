import React from "react";
import NavBar from "../components/navbar/main";

const Settings = () => {
  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center mt-5">
        <div className="bg-text-grey/[.18] rounded-2xl w-[1625px] h-[809px]">
          <h1 className="text-text-grey text-4xl flex justify-center overflow-hidden mt-8">
            Settings
          </h1>
          <div className="flex flex-col justify-start ml-10">
            <h1 className="text-text-grey text-2xl mt-6">Name</h1>
            <input type="text" className="bg-text-grey/[.18] w-[15vw] rounded-2xl mt-5"></input>
          </div>
          <div className="flex flex-col justify-start ml-10">
            <h1 className="text-text-grey text-2xl mt-6">Address</h1>
            <input type="text" className="bg-text-grey/[.18] w-[15vw] rounded-2xl mt-5"></input>
          </div>
          <div className="flex flex-col justify-start ml-10">
            <h1 className="text-text-grey text-2xl mt-6">City</h1>
            <input type="text" className="bg-text-grey/[.18] w-[15vw] rounded-2xl mt-5"></input>
          </div>
          <div className="flex flex-row gap-6 ml-10 mt-10 items-center"> 
          <input type="checkbox" className="appearence-none w-4 h-4 ml-2 bg-text-grey/[.18] checked:bg-text-yellow border-none focus:border-none"></input>
          <h1 className="text-text-grey">18+</h1>
          </div>
          <div className="flex flex-row gap-6 ml-10 mt-10 items-center"> 
          <input type="checkbox" className="appearence-none w-4 h-4 ml-2 bg-text-grey/[.18] checked:bg-text-yellow border-none focus:border-none"></input>
          <h1 className="text-text-grey">Remember authentication</h1>
          </div>
          <div className="flex flex-row gap-6 ml-10 mt-10 items-center"> 
          <input type="checkbox" className="appearence-none w-4 h-4 ml-2 bg-text-grey/[.18] checked:bg-text-yellow border-none focus:border-none"></input>
          <h1 className="text-text-grey">Family control</h1>
          </div>
        </div>
        <button className="bg-text-grey/[.18] rounded-2xl flex justify-center absolute bottom-14 w-[292px] h-[45px] text-text-grey items-center">Apply Changes</button>
      </div>
    </div>
  );
};

export default Settings;
