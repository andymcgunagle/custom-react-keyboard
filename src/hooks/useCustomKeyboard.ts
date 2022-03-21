import { useState } from "react";

export default function useCustomKeyboard() {
  const [inputModeValue, setInputModeValue] = useState<"none" | "text">("none");
  const [showKeyboard, setShowKeyboard] = useState(false);

  const handleFocus = () => {
    setShowKeyboard(true);
    setInputModeValue("none");
  };

  const handleBlur = () => {
    setShowKeyboard(false);
  };

  return {
    handleBlur,
    handleFocus,
    inputModeValue,
    setInputModeValue,
    showKeyboard,
    setShowKeyboard,
  };
};
