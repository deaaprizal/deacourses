import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ModalComponent from "./modal";

let triggerButton;
export const becomeDevButton = (props) => {
  return triggerButton(props);
};

export default function Guideline() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  triggerButton = setShow;
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Become A Developer
      </Button>
      <ModalComponent show={show} close={handleClose}/>
    </>
  );
}
