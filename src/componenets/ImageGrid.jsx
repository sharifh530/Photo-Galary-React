import React from "react";

import useFirestore from "../hooks/useFirestore";

function ImageGrid() {
  const { docs } = useFirestore("image");
  console.log(docs);
  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <div className="img-wrap" key={docs.id}>
            <img src={doc.url} alt="Photo Galary" />
          </div>
        ))}
    </div>
  );
}

export default ImageGrid;
