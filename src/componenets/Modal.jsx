import React from "react";

function Modal({ selectedImg }) {
  return (
    <div className="backdrop">
      <img src={selectedImg} alt="enlarged pic" />
    </div>
  );
}

export default Modal;
