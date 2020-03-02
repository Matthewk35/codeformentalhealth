import React from 'react';

export default function SubHeader(props) {
  const {title, desc} = props;
  return (
    <div>
        <h2>
            {title}
        </h2>
        <p>
            {desc}
        </p>
    </div>
  );
}