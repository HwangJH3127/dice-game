import React from "react";
import diceRed1 from "../../assets/img/dice-red-1.svg";
import diceRed2 from "../../assets/img/dice-red-2.svg";
import diceRed3 from "../../assets/img/dice-red-3.svg";
import diceRed4 from "../../assets/img/dice-red-4.svg";
import diceRed5 from "../../assets/img/dice-red-5.svg";
import diceRed6 from "../../assets/img/dice-red-6.svg";

import diceBlue1 from "../../assets/img/dice-blue-1.svg";
import diceBlue2 from "../../assets/img/dice-blue-2.svg";
import diceBlue3 from "../../assets/img/dice-blue-3.svg";
import diceBlue4 from "../../assets/img/dice-blue-4.svg";
import diceBlue5 from "../../assets/img/dice-blue-5.svg";
import diceBlue6 from "../../assets/img/dice-blue-6.svg";

import "./Dice.css";

export const Dice = ({ color, history }) => {
  const num = history[history.length - 1] || 1;

  const DICE_IMAGES = {
    blue: [diceBlue1, diceBlue2, diceBlue3, diceBlue4, diceBlue5, diceBlue6],
    red: [diceRed1, diceRed2, diceRed3, diceRed4, diceRed5, diceRed6],
  };

  const src = DICE_IMAGES[color][num - 1];
  const alt = `${color}${num - 1}`;
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Dice;
