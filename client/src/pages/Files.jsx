import React, { useState } from "react";
import Folder from "../components/Folder";
import explorer from "../data/FolderData";
import useTraverseTree from "../hooks/use-traverse-tree";
import BreadCrumbs from "../components/BreadCrumbs";
import FileUploader from "../components/FileUploader";

function Files() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
  };
  return (
    <>
    <div>
      {/* <BreadCrumbs /> */}
      <FileUploader />
    </div>
    <div>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
    </>
  );
}

export default Files;
