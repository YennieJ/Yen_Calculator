import React from "react";
import AutoScalingText from "./components/autoScalingText/autoScalingText";

const CalculatorDisplay = ({ value, ...props }) => {
  const language = navigator.language || "en-US";
  let formattedValue = parseFloat(value).toLocaleString(language, {
    useGrouping: true,
    maximumFractionDigits: 6,
  });
  // useGrouping: 숫자 구분기호(,) ex)123,456,789
  // maximumFractionDigits: 소숫점 뒤에 6자리까지만 보여줌

  const match = value.match(/\.\d*?(0*)$/);
  if (match) formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0];

  return (
    <div {...props} className="calculator-display">
      {formattedValue}
    </div>
  );
};

export default CalculatorDisplay;
