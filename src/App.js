import React from "react";
import Tags from "./Components/Tags";
import Random from "./Components/Random";

export default function App() {
  return (
    <div className="w-[100vw] h-screen flex flex-col background overflow-x-hidden">
        <h1 className="bg-white mt-[40px] ml-[40px] mr-[40px] px-10 py-4 rounded-2xl uppercase font-bold text-center text-3xl">
          RANDOM GIFS
        </h1>

        <div className="flex flex-col items-center">
          <Random />

          <Tags />
        </div>
    </div>
  );
}