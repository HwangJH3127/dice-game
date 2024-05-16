import React from "react";
import "./Button.css";

const Button = ({ className, title, onclick }) => {
  return (
    <div className="btn__wrap">
      <button className={className} onClick={onclick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
