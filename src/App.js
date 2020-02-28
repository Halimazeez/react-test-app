import React from "react";
import "./App.css";

import MyDropzone from "./MyDropzone";
import DropzoneTest from "./Dropzone";

function App() {
  return (
    <div className="App">
      <div>
        <h1>dropzone</h1>
        <DropzoneTest />
        {/* <MyDropzone /> */}
      </div>
    </div>
  );
}

export default App;
