import React from "react";
import ColumnAndLabel from "./ColumnAndLabel";

function Box(props) {
  return (
    <div className="box">
      <div className="histogram">
        {Object.keys(props.data)
          .sort((a, b) => a - b)
          .map((num, i) => (
            <ColumnAndLabel
              key={"column-label" + num}
              num={num}
              frequency={props.data[num]}
              labelRef={props.labelsRef[i]}
              maxValue={props.maxValue}
            />
          ))}
      </div>
    </div>
  );
}

export default Box;
