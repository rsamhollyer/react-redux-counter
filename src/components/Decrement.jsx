/* eslint-disable react/prop-types */
import React from 'react';

export default function Decrement({ handleClick }) {
  return (
    <div>
      <button type="button" onClick={handleClick}>
        ➖
      </button>
    </div>
  );
}
