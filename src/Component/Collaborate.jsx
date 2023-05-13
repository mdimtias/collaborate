import React from "react";
import Ai from "./../assets/ai-rpa.jpg";
import Embrace from "./../assets/embrace.jpg";
import Innovate from "./../assets/Innovate.jpg";
import Make from "./../assets/make.png";
import RightArrow from "../assets/rightArrow";
const Collaborate = () => {
  return (
    <div className="container mx-auto px-5">
      <h1 className="font-bold text-black text-2xl text-left pb-10">
        Let's Collaborate
      </h1>
      <div className="grid md:grid-cols-2 gap-x-5">
        <div className="text-left flex flex-col justify-between gap-5 sm:pr-10">
         <div className="pt-4">
         <h2 className="font-medium text-5xl font-serif text-black pb-12">
            AI + RPA is what we do
          </h2>
          <p className="text-black font-serif text-xl">
            Future-Proof your business. Drive efficiency, profitability and
            deliver on customer experience
          </p>
         </div>
          <div className="flex items-center flex-wrap gap-5 pb-5">
            <a href="#" className="text-black text-xl font-semibold font-serif hover:pl-2 transition-all duration-500">
              AI + RPA Automation
            </a>
            <RightArrow></RightArrow>
          </div>
        </div>
        <div>
          <img src={Ai} className="w-full h-full" alt="AI + RPA" />
        </div>
        <div className="text-left flex flex-col justify-between gap-5 sm:pr-10">
         <div className="pt-4">
         <h2 className="font-medium text-5xl font-serif text-black pb-12">
         Make Bolder Choices
          </h2>
          <p className="text-black font-serif text-xl">
          Digital focused strategies to realize market-changing ideas
          </p>
         </div>
          <div className="flex items-center flex-wrap gap-5 pb-5">
            <a href="#" className="text-black text-xl font-semibold font-serif hover:pl-2 transition-all duration-500">
              Build Better Apps
            </a>
            <RightArrow></RightArrow>
          </div>
        </div>
        <div>
          <img src={Make} className="w-full h-full" alt="Make Bolder Choices" />
        </div>
        <div className="text-left flex flex-col justify-between gap-5 sm:pr-10">
         <div className="pt-4">
         <h2 className="font-medium text-5xl font-serif text-black pb-12">
         Innovate with Speed
          </h2>
          <p className="text-black font-serif text-xl">
          Create higher quality software, deliver on customer expectations and business goals
          </p>
         </div>
          <div className="flex items-center flex-wrap gap-5 pb-5">
            <a href="#" className="text-black text-xl font-semibold font-serif hover:pl-2 transition-all duration-500">
              DevOps
            </a>
            <RightArrow></RightArrow>
          </div>
        </div>
        <div>
          <img src={Innovate} className="w-full h-full" alt="Innovate with Speed" />
        </div>
        <div className="text-left flex flex-col justify-between gap-5 sm:pr-10">
         <div className="pt-4">
         <h2 className="font-medium text-5xl font-serif text-black pb-12">
         Embrace Cloud
          </h2>
          <p className="text-black font-serif text-xl">
          With Cloud-First accelerate innovation and optimize performance
          </p>
         </div>
          <div className="flex items-center flex-wrap gap-5 pb-5">
            <a href="#" className="text-black text-xl font-semibold font-serif hover:pl-2 transition-all duration-500">
             Cloud Services
            </a>
            <RightArrow></RightArrow>
          </div>
        </div>
        <div>
          <img src={Ai} className="w-full h-full" alt="Embrace Cloud" />
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
