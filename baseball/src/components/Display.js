import React from "react";

export default function Display(props) {
  return (
    <div className='Display'>
      <div>
        <h2 data-testid='Balls'>You have this many Balls: {props.balls}</h2>
        <h2>You have this many Strikes{props.strikes}</h2>
      </div>
      {/* <div>
        <h3>You have this many Hits: {props.hits}</h3>
        <h3>You have this many Outs:{props.outs}</h3>
      </div> */}
    </div>
  );
}
