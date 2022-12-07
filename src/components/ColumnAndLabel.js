import React from "react";
import getColor from "./getColor";
import Column from "./Column";

function ColumnAndLabel(props) {
  return (
    <div className="column-label">
      <Column
        labelRef={props.labelRef}
        color={getColor()}
        height={100 * (props.frequency / props.maxValue)}
      />
      <div ref={props.labelRef} className="label">
        {/**frequency label visible on hover */}
        {props.frequency}
      </div>
      <span>{props.num}</span> {/**x-axis */}
    </div>
  );
}

export default ColumnAndLabel;
