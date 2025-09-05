import React, { useState } from "react";
import "../style4.css";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonBg, setButtonBg] = useState("white");

  function handleClick() {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonBg(backgroundColor === "white" ? "#1b1b1b" : "white");
  }

  return (
    <div style={{ backgroundColor, color: textColor, minHeight: "100vh" }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonBg,
          color: textColor,
          border: `2px solid ${textColor}`,
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>

      <section className="content">
        <h1>
          Welcome to a <br />
          Real World....
        </h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;
