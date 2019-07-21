import React from 'react';

export default ({
    acmLink,
    date,
    oldLink,
    description,
  }) => (
    <div>
      <h3>{acmLink}</h3>
      <p>Date created: {date}</p>
      <p>Original link: {oldLink}</p>
      <p>Description: {description}</p>
    </div>
  );