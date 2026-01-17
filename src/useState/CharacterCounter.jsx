import { useState } from "react";

const CharacterCounter = () => {
  const MAX_LENGTH = 200;
  const [text, setText] = useState("");

  const handleChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH) {
      setText(e.target.value);
    }
  };

  return (
    <div>
      <textarea
        rows="5"
        cols="40"
        placeholder="Type your feedback..."
        value={text}
        onChange={handleChange}
      />

      <p>
        Characters: {text.length} / {MAX_LENGTH}
      </p>

      {text.length === MAX_LENGTH && (
        <p style={{ color: "red" }}>
          Character limit reached
        </p>
      )}
    </div>
  );
};

export default CharacterCounter;
