import React from "react";
import imgSrc from "./assets/Frame Fabs 1.png";

function Body() {
  return (
    <section className="suavebody-container flex flex-col items-center pt-[167px]">
      <div className="flex flex-col items-center">
        <h1 className="font-mdsans text-[72px] text-[#16083D] font-normal text-center">Manage your sales and <br /> analytics in one place</h1>
        <p className="my-[40px] text-[#16083D] text-center">
          Track custom events, increase form submissions, optimize conversion
          rates and <br /> optimize your sales flow with Scalable.
        </p>
        <div className="flex items-center justify-center w-[186px] h-[48px] bg-[#6034DA] rounded-[4px] cursor-pointer">
        <p className="font-satoshi text-center text-white">Coming Soon</p>
        </div>
      </div>
      <img className="mt-[108px] w-[1152px]" src={imgSrc} alt="image lol" />
    </section>
  );
}
891
export default Body;
