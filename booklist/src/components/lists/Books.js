import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import "./Books.css";

function Books() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  if (show) {
    return (
      <div className="books">
        <div className="percent">
          <h3>0%</h3>
          <p>Completed</p>
        </div>
        <div className="choose">
          <p>CURRENT CHAPTER</p>
          <p>A chapter</p>
          <Button onClick={() => setShow(false)}> Update progress </Button>
        </div>
      </div>
    );
  }
  if (progress > 90) {
    return (
      <div className="books">
        <div className="percent">
          <h3>{progress}%</h3>
          <p>Completed</p>
        </div>
        <div className="choose">
          <p>CURRENT CHAPTER</p>
          <p>A chapter</p>
          <Alert className="ab" onClose={() => setShow(true)} dismissible>
            <Button onClick={() => setProgress(progress)}>Add</Button>
            <div className="pad"></div>
            <Button onClick={() => setProgress(progress - 10)}>Remove</Button>
          </Alert>
        </div>
      </div>
    );
  }
  if (progress < 10) {
    return (
      <div className="books">
        <div className="percent">
          <h3>{progress}%</h3>
          <p>Completed</p>
        </div>
        <div className="choose">
          <p>CURRENT CHAPTER</p>
          <p>A chapter</p>
          <Alert className="ab" onClose={() => setShow(true)} dismissible>
            <Button onClick={() => setProgress(progress + 10)}>Add</Button>
            <div className="pad"></div>
            <Button onClick={() => setProgress(progress)}>Remove</Button>
          </Alert>
        </div>
      </div>
    );
  }
  return (
    <div className="books">
      <div className="percent">
        <h3>{progress}%</h3>
        <p>Completed</p>
      </div>
      <div className="choose">
        <p>CURRENT CHAPTER</p>
        <p>A chapter</p>
        <Alert className="ab" onClose={() => setShow(true)} dismissible>
          <Button onClick={() => setProgress(progress + 10)}>Add</Button>
          <div className="pad"></div>
          <Button onClick={() => setProgress(progress - 10)}>Remove</Button>
        </Alert>
      </div>
    </div>
  );
}

export default Books;
