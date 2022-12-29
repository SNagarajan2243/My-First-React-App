import React from "react";

import ReactDOM from "react-dom";

import Card from "./Card";

import Button from "./Button";

import "./Modal.css";

const Backdrop = () => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = props => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.errorMessage.title}</h2>
      </header>
      <section className="content">
        <p>{props.errorMessage.message}</p>
      </section>
      <footer className="actions">
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {
        ReactDOM.createPortal(<ModalOverlay errorMessage = {props.errorMessage} onConfirm={props.onConfirm} />,document.getElementById('overlay-root'))
      }
    </>
  );
};

export default Modal;
