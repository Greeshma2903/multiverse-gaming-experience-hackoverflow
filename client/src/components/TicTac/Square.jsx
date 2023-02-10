import React from "react";

function Square(props) {
  return (
    <div>
      <button className="btn hover:bg-gray-200 border" onClick={() => props.onClick()}>
        {props.value}
      </button>
    </div>
  );
}

export default Square;
