import React from "react";

import "./App.css";

import Dropzone from "dropzone";

Dropzone.options.myAwesomeDropzone = {
  paramName: "fileeeeeeeeee", // The name that will be used to transfer the file
  maxFilesize: 2, // MB
  chunking: true,
  forceChunking: true,
  chunkSize: 1000000,
  method: "put"
};

function DropzoneTest() {
  return (
    <div>
      <form
        action="https://dev.propel.live/api/v1/rlib/repositories/c8fcdd34-e883-4de8-b08a-541ba7c9134e/files"
        className="dropzone"
        id="my-awesome-dropzone"
      >
        <input className="file" type="file" name="file" />
      </form>
    </div>
  );
}

export default DropzoneTest;
