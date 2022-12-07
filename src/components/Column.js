import React from "react";

function Column(props) {
  const hover = (event) => {
    event.currentTarget.style.opacity = "0.5";
    props.labelRef.current.style.background = props.color;
    props.labelRef.current.style.visibility = "visible";
    props.labelRef.current.style.opacity = "1";
  };

  const hoverLeave = (event) => {
    event.currentTarget.style.opacity = "1";
    props.labelRef.current.style.visibility = "hidden";
    props.labelRef.current.style.opacity = "0";
  };

  return (
    <div
      className="column"
      style={{ height: props.height + "%", background: props.color }}
      onMouseEnter={hover}
      onMouseLeave={hoverLeave}
      onTouchStart={hover}
      onTouchEnd={hoverLeave}
    ></div>
  );
}

export default Column;
