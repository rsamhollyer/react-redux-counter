/* eslint-disable react/prop-types */
import React from 'react';

export default function Increment({ handleClick }) {
  return (
    <div>
      <button type="button" onClick={handleClick}>
        ➕
      </button>
    </div>
  );
}
