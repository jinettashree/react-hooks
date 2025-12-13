import { useState, useEffect } from "react";

function InputLogger() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Text changed:", text);
  }, [text]);

  return (
    <div>
      <h3>Type Something:</h3>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default InputLogger;