import React, { useState } from "react";

function SelectForm() {
  const [firstSelectOption, setFirstSelectOption] = useState("");
  const [secondSelectOption, setSecondSelectOption] = useState("");
  const [subOptions, setSubOptions] = useState([]);

  const handleFirstSelectChange = (event) => {
    const selectedValue = event.target.value;
    setFirstSelectOption(selectedValue);

    if (selectedValue === "option1") {
      setSubOptions(["subOption1", "subOption2", "subOption3"]);
    } else if (selectedValue === "option2") {
      setSubOptions(["subOption4", "subOption5"]);
    } else {
      setSubOptions([]);
    }

    setSecondSelectOption("");
  };

  const handleButtonClick = () => {
    console.log("첫 번째 선택: ", firstSelectOption);
    console.log("두 번째 선택: ", secondSelectOption);
  };

  return (
    <div>
      <div>
        <label>첫 번째 선택: </label>
        <select value={firstSelectOption} onChange={handleFirstSelectChange}>
          <option value="">선택하세요</option>
          <option value="option1">옵션 1</option>
          <option value="option2">옵션 2</option>
          <option value="option3">옵션 3</option>
        </select>
      </div>
      <div>
        <label>두 번째 선택: </label>
        <select
          value={secondSelectOption}
          onChange={(event) => setSecondSelectOption(event.target.value)}
        >
          <option value="">선택하세요</option>
          {subOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleButtonClick}>값 출력</button>
    </div>
  );
}

export default SelectForm;
