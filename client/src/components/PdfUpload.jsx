import React, { useEffect, useState } from "react";
import axios from "axios";
import { getFileRoute, uploadFileRoute } from "../utils/APIRoutes";
import "../styles/PdfUpload.css";

function PdfUpload() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [status, setStatus] = useState("initial");

  const handleFileChange = (e) => {
    if (e.target.files) {
      setStatus("initial");
      setFile(e.target.files[0]);
    }
  };

  const getPdf = async () => {
    const result = await axios.get(getFileRoute);
    console.log(result.data.data);
    setAllImage(result.data.data);
  };
  useEffect(() => {
    getPdf();
  }, []);

  const submitFile = async (e) => {
    e.preventDefault();
    setStatus("uploading");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    const result = await axios.post(uploadFileRoute, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(result);
    if (result.data.status === "ok") {
      setStatus("success");
      getPdf();
    } else {
      setStatus("fail");
    }
  };

  const showPdf = (pdf) => {
    window.open(`http://localhost:3001/files/${pdf}`, "_blank", "noreferrer");
    //setPdfFile(`http://localhost:3001/files/${pdf}`, "_blank", "noreferrer");
  };
  return (
    <div className="file-ulpoad">
      <Result status={status} />
      <form className="formStyle" onSubmit={submitFile}>
        <h4>Upload Files</h4>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="file"
          className="form-control"
          accept="application/pdf"
          required
          onChange={handleFileChange}
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <br />
      <div className="uploaded">
        <h4>Uploaded PDF</h4>
        <div className="output-div">
          {allImage == null
            ? ""
            : allImage.map((data) => {
                return (
                  <div className="input-div">
                    <h6>Title: {data.title}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show PDF
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
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
export default PdfUpload;
