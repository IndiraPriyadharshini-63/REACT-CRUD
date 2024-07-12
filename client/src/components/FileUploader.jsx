import React, { useState } from "react";
import { uploadFilesRoute } from "../utils/APIRoutes";

function FileUploader() {
  // const [files, setFiles] = useState<File | null>(null);
  //const [status, setStatus] =  useState<"initial" | "uploading" | "success" | "fail">("initial")
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("initial");


  const handleFileChange = (e) => {
    if (e.target.files) {
      setStatus("initial");
      setFile(e.target.files[0]);
    }
  };

  // const handleFileChange = (files) => {
  //   const file = files[0];
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   const config = {
  //     headers: {
  //       "Content-Type":"multipart/form-data"
  //     }
  //   };
  // }

  const handleUpload = async () => {
    if (file) {
      setStatus("uploading");
      const formData = new FormData();
      formData.append("file", file);

      try {
        const result = await fetch(uploadFilesRoute, {
          method: "POST",
          body: formData,
        });
        const data = await result.json();
        console.log(data);
        setStatus("success");
      } catch (err) {
        console.log(err);
        setStatus("fail");
      }
    }
  };
  return (
    <>
      <div className="input-group">
        <label htmlFor="file" className="sr-only">
          Choose a File
        </label>
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
      {file && (
        <section>
          File Details:
          <ul>
            <li>Name: {file.name}</li>
            <li>type: {file.type}</li>
            <li>Size: {file.size} Bytes</li>
          </ul>
        </section>
      )}
      {file && (
        <button onClick={handleUpload} className="submit">
          Upload a File
        </button>
      )}
      <Result status={status} />
      <div>
        <h4>Uploaded PDF</h4>
        <div className="output-div">
          <div className="input-div">
            <h6>Title</h6>
            <button>Show Pdf</button>
          </div>
        </div>
      </div>
    </>
  );
}

const Result = ({ status }) => {
  if (status === "success") {
    return <p>✅ File Uploaded Successfully</p>;
  } else if (status === "fail") {
    return <p>❌ File upload failed!</p>;
  } else if (status === "uploading") {
    return <p>⌛ Uploading selected file...</p>;
  } else {
    return null;
  }
};

export default FileUploader;
