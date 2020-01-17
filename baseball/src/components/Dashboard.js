import React from "react";

export default function Dashboard(props) {
  return (
    <div>
      <button data-testid='Hits' onClick={props.hit}>
        hits
      </button>
      <button onClick={props.strike}>strikes</button>
      <button onClick={props.foul}>fouls</button>
      <button onClick={props.ball}>balls</button>
    </div>
  );
}
