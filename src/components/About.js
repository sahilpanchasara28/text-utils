import React from "react";

export default function About(props) {
  return (
    <div
      className="container my-5"
      style={{
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h1>About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "darkgrey",

                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "darkgrey",

              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <div className="accordion-body">
              TextUtils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or read time.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "darkgrey",

                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Free To Use
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "darkgrey",

              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <div className="accordion-body">
              TextUtils is a free character counter tool that provides instant
              character and word count statistics for a given text. TextUtils
              reports the number of words and characters. Thus it is suitable
              for writing text with word/ character limit. It also converts the
              inserted text into uppercase, lowercase, clear text, copy text and
              remove extra spaces.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "darkgrey",

                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "darkgrey",

              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as
              chrome, firefox, IE and many more.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
