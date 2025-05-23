import React from "react";

function Button(props) {
  return (
    <>
      <button
        className={`transition duration-300 mt-12 p-3 w-60 rounded-xl ${props.className} text-white font-semibold`}
      >
        {props.label}
      </button>
    </>
  );
}

export default Button;
