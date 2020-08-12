import React from "react";

import { motion } from "framer-motion";

import useFirestore from "../hooks/useFirestore";

function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore("image");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={docs.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="Photo Galary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
