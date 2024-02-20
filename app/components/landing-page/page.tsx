import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <h1 className=" absolute left-[40%] mt-8 text-6xl overflow-hidden text-text-grey">
        What's new?
      </h1>
      <div className="flex flex-row gap-40 mt-[19vh] justify-center overflow-hidden ">
        <div className=" w-[447px] h-[608px] bg-text-grey/[.18] rounded-2xl hover:scale-110 transition-all cursor-pointer">
          <Image src="/Metro.png" width={600} height={600} alt="#" />
          <h1 className=" text-4xl overflow-hidden ml-28 mt-6">Metro Exodus</h1>
          <p className="w-[380px] ml-8 mt-6">
            Metro Exodus is a 2019 first-person shooter game developed by 4A
            Games and published by Deep Silver. The game is the third
            installment in the Metro video game series, which is based on Dmitry
            Glukhovsky's novels. It is a sequel to Metro: Last Light and the
            book Metro 2035.
          </p>
        </div>
        <div className=" w-[447px] h-[608px] bg-text-grey/[.18] rounded-2xl hover:scale-110 transition-all cursor-pointer">
          <Image src="/Fallout.png" width={600} height={600} alt="#" />
          <h1 className=" text-4xl overflow-hidden ml-36 mt-6">Fallout 4</h1>
          <p className="w-[380px] ml-8 mt-6">
            Fallout 4 is a 2015 action role-playing game developed by Bethesda
            Game Studios and published by Bethesda Softworks. It is the fourth
            main game in the Fallout series and was released worldwide on
            November 10, 2015, for PlayStation 4, Windows, and Xbox One.
          </p>
        </div>
        <div className=" w-[447px] h-[608px] bg-text-grey/[.18] rounded-2xl hover:scale-110 transition-all cursor-pointer">
          <Image src="/FarCry.png" width={600} height={600} alt="#" />
          <h1 className=" text-4xl overflow-hidden ml-36 mt-6">Far Cry 3</h1>
          <p className="w-[380px] ml-8 mt-6">
            Far Cry 3 is a 2012 first-person shooter game developed by Ubisoft
            Montreal and published by Ubisoft. It is the third main installment
            in the Far Cry series after Far Cry 2. The game takes place on the
            fictional Rook Islands, a tropical archipelago which can be freely
            explored by players.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
