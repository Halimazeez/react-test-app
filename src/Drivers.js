import React, { useState } from "react";

import driver from "./Drivers_challenge/index";

const Drivers = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleCapitalize = () => {
    const response = driver.affect(inputValue);
    // setInputValue(response.text);
    console.log("capitalize %o", response);
  };

  const handleReverse = () => {
    const response = driver.affect(inputValue);
    console.log("reverse %o", response);
  };

  const handleSpacer = () => {
    const response = driver.affect(inputValue);
    console.log("spacer %o", response);
  };

  const handleNothing = () => {
    const response = driver.affect(inputValue);
    console.log("nothing %o", response);
  };

  return (
    <div className={"drivers"}>
      <div>
        <input type="text" onChange={handleChange} value={inputValue} />
      </div>
      <div>
        <button onClick={handleCapitalize}>Cap</button>
        <button onClick={handleReverse}>Reverse</button>
        <button onClick={handleSpacer}>Spacer</button>
        <button onClick={handleNothing}>Nothing</button>
      </div>
    </div>
  );
};

export default Drivers;
