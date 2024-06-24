import React, { useState } from 'react';

function TextInput() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Text Input</h2>
      <input type="text" value={text} onChange={handleChange} />
      <p>Entered Text: {text}</p>
    </div>
  );
}

export default TextInput;