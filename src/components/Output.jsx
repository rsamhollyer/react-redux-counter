/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Output({ amount }) {
  return (
    <div>
      <h3>The Current Amount is : {amount || 0}</h3>
    </div>
  );
}
