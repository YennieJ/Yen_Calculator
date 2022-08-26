import React, { useState, useRef, useEffect } from "react";

const AutoScalingText = (props) => {
  const [scale, setScale] = useState(1);
  const scaleRef = useRef(null);

  const node = scaleRef.current;
  const parentNode = node?.parentNode;

  const availableWidth = parentNode?.offsetWidth;
  const actualWidth = node?.offsetWidth;
  const actualScale = availableWidth / actualWidth;

  useEffect(() => {
    if (scale === actualScale) return;

    if (actualScale < 1) {
      setScale(actualScale);
    } else if (scale < 1) {
      setScale(1);
    }
  }, [{ scale }]);

  const style = {
    transform: `scale(${scale},${scale})`,
  };

  return (
    <>
      <div className="auto-scaling-text" style={style} ref={scaleRef}>
        {props.children}
      </div>
    </>
  );
};
export default AutoScalingText;
