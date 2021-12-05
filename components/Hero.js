import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "../constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="justify-center overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Hey, I'm Ricardo
            </h1>
          </RainbowHighlight>
          <p class="font-mono text-xl dark:text-gray-200 text-gray-700">I am <RainbowHighlight color={colors[1]}> Software Engineer </RainbowHighlight>from Monterrey, Mexico.</p>
        </RoughNotationGroup>
      </div>
    </div>
  );
}
