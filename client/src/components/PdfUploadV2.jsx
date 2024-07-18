import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { getFileRoute, uploadFileRoute } from "../utils/APIRoutes";
import { pdfjs } from "react-pdf";
import PdfComp from "./PdfComp";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function PdfUploadV2() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
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
    setPdfFile(`http://localhost:3001/files/${pdf}`);
    console.log(pdfFile);
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-4">
          <h4>Upload files</h4>
          <br />
          <form onSubmit={submitFile}>
            <input
              type="text"
              placeholder="title"
              className="form-control"
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

          <h4>Files</h4>
          {allImage == null
            ? ""
            : allImage.map((data) => {
                return (
                  <h6
                    onClick={() => showPdf(data.pdf)}
                    style={{ cursor: "pointer" }}
                  >
                    {data.title}
                  </h6>
                );
              })}
        </div>
        <div class="col-8">
          <div>
            <Result  status={status}/>
          </div>
          <PdfComp pdfFile={pdfFile}/>
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

export default PdfUploadV2;
