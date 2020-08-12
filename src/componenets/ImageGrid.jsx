import React from "react";

import useFirestore from "../hooks/useFirestore";

function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore("image");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={docs.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="Photo Galary" />
          </div>
        ))}
    </div>
  );
}

export default ImageGrid;
