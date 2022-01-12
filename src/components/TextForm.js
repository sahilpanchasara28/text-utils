import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpper = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase !", "success");
  };

  const handleLower = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase !", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container my-5"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "darkgrey",

              color: props.mode === "light" ? "black" : "white",
            }}
          />
        </div>

        <div className="d-grid gap-2 d-md-block">
          <button
            disabled={text.length === 0}
            className="btn btn-success mx-2"
            onClick={handleUpper}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-success mx-2"
            onClick={handleLower}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-success mx-2"
            onClick={handleClear}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-success mx-2"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-success mx-2"
            onClick={handleExtraSpace}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container my-5"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.length} characters,{" "}
          {text.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length * 0.008}{" "}
          min read time.
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter Something to Textbox to Preview"}
        </p>
      </div>
    </>
  );
}
