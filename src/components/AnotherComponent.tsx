import { useState } from "react";
import { hideKeyboard, showKeyboard } from "../hooks/useCustomKeyboard";
import { StyledInput } from "../App";

export default function AnotherComponent() {
  const [input2, setInput2] = useState('');

  return (
    <div>
      <StyledInput
        onBlur={() => hideKeyboard()}
        onFocus={() => showKeyboard()}
        onChange={e => setInput2(e.target.value)}
        type="text"
        value={input2}
        className="custom-keyboard-input"
        placeholder='Input 2'
      />
    </div>
  );
};