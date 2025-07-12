import React from 'react';
import './ButtonCard.css'; 

export default function ButtonCard() {
  return (
    <div className="button-card">
      <h3 className="button-card-title">Button card</h3>

      <button className="button-card-button">
        Click!
      </button>
    </div>
  );
}
