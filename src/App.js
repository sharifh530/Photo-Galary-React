import React, { useState } from "react";
import Title from "./componenets/Title.jsx";
import UploadForm from "./componenets/UploadForm.jsx";
import ImageGrid from "./componenets/ImageGrid.jsx";
import Modal from "./componenets/Modal.jsx";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
