import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./BookForm.css";

function BookForm({ onSubmit }) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [selectValue, setSelectValue] = useState();
  /* const options = [
    {
      label: "Category",
      value: "Category",
    },
    {
      label: "Category1",
      value: "Category1",
    },
    {
      label: "Category2",
      value: "Category2",
    },
    {
      label: "Category3",
      value: "Category3",
    },
    {
      label: "Category4",
      value: "Category4",
    },
    {
      label: "Category5",
      value: "Category5",
    },
    {
      label: "Category6",
      value: "Category6",
    },
  ];*/

  const handleChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handleChange3 = (e) => {
    setSelectValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1 === "" || input2 === "" || selectValue === "") {
      alert("Please enter all fields");
    } else {
      onSubmit({
        id: Date.now(),
        title: input1,
        author: input2,
        category: selectValue,
      });
    }
    setInput1("");
    setInput2("");
    setSelectValue(Form.Select);
  };

  return (
    <div className="bookform">
      <hr className="line" />
      <h4>ADD NEW BOOK</h4>
      <Row onSubmit={handleSubmit}>
        <Col>
          <Form>
            <Form.Control
              type="text"
              placeholder="Title"
              value={input1}
              onChange={handleChange1}
            />
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Control
              type="text"
              placeholder="Author"
              value={input2}
              onChange={handleChange2}
            />
          </Form>
        </Col>
        <Col md>
          <Form>
            <Form.Select onChange={handleChange3}>
              <option value="Category" selected>
                Category
              </option>
              <option value="Category1">Category1</option>
              <option value="Category2">Category2</option>
              <option value="Category3">Category3</option>
              <option value="Category4">Category4</option>
              <option value="Category5">Category5</option>
            </Form.Select>
            {/* <Form.Select onChange={handleChange3}>
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
              </Form.Select>*/}
          </Form>
        </Col>
        <Col>
          <Form>
            <Button type="submit" className="box-button">
              ADD BOOK
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default BookForm;
