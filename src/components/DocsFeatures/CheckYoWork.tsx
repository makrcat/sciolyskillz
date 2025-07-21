import React, { useState } from 'react';

function Choice({ label, text, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ position: "relative", width: "100%", cursor: "pointer" }}
      className="flex items-center mb-2"
    >
      <div
        style={{
          position: "absolute",
          left: 30,
          top: "50%",
          transform: "translateY(-50%)",
          width: 16,
          height: 16,
          borderRadius: "50%",
          border: selected?"2px solid oklch(60% 0.118 184.704)": 
          "2px solid oklch(70.4% 0.04 256.788)",
          backgroundColor: "white",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          left: 34,
          top: "50%",
          transform: "translateY(-50%)",
          width: 8,
          height: 8,
          borderRadius: "50%",
          border: selected ? "2px solid oklch(60% 0.118 184.704)" : "none",
          backgroundColor: selected ? "oklch(60% 0.118 184.704)" : "white",
        }}
      ></div>

      {/* Choices */}
      <div
        className={`checkyo-answer ${selected ? "selected-answer" : ""}`}
      >

        <strong>{label}.</strong> {text}
      </div>
    </div>
  );
}

export default function CheckYoWork({
  title,
  subtext,
  choiceA,
  choiceB,
  choiceC,
  choiceD,
  answer,/* 0 1 2 3 */
  explanation
}) {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const choices = [
    { label: "A", text: choiceA },
    { label: "B", text: choiceB },
    { label: "C", text: choiceC },
    { label: "D", text: choiceD },
  ];

  const handleCheck = () => {
    if (selected !== null) setShowResult(true);
  };

  return (
    <div className="checkyo-box">
      {title && <h3 className="font-bold text-lg mb-1">{title}</h3>}
      {subtext && <p className="mb-3">{subtext}</p>}

      {choices.map((c, idx) => (
        <Choice
          key={c.label}
          label={c.label}
          text={c.text}
          selected={selected === idx}
          onClick={() => {
            setSelected(idx);
            setShowResult(false);
          }}
        />
      ))}

      <button
        onClick={handleCheck}
        className=" mt-3 px-3 py-1 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors text-sm"
      >
        Check Answer
      </button>

      {showResult && selected !== null && (
        <p className="font-semibold mb-0 mt-2">
          {
            selected == answer
              ? <>Correct! {explanation}</>
              : "x Try again!"
          }
        </p>
      )}
    </div>
  );
}
