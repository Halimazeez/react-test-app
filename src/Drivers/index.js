import React from "react";

// import { Propel } from "@signaturelnd/propel-capacitor-plugin";
import lmsEvents from "./electron_helpers/LMSEvents";

import { Plugins } from "@capacitor/core";
import "@signaturelnd/propel-capacitor-plugin";
const { Propel } = Plugins;

const Drivers = () => {
  // const handleClick = e => {
  //   console.log(e);
  // };

  return (
    <div className={"drivers"}>
      <div>
        <button
          onClick={() =>
            Propel.login({
              url: "https://shire.sabanow.net/Saba/Web/Main?isMobile=true",
              callback_scheme: "tonative"
            })
          }
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Drivers;
