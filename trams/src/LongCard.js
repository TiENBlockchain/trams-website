import React from 'react';

export default function LongCard(props) {
  return (
    <div className="long-card">
      <h2>{props.question}</h2>
      {props.answer}
    </div>
  );
}
