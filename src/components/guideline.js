import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ModalComponent from "./modal";

export default function Guideline() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{ padding: 2, margin: 2 }}>
      <Button variant="danger" onClick={handleShow}>
        Lihat Sesi Latihan
      </Button>
      <ModalComponent show={show} close={handleClose} />
    </div>
  );
}
