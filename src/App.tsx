import { useRef, useState } from 'react';

import styled from 'styled-components';

import useCustomKeyboard from './hooks/useCustomKeyboard';

import CustomKeyboard from './components/CustomKeyboard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  padding: 1rem;
`;

const TestInput = styled.input`
  background-color: #f7f7f7;
  border-radius: 0.25rem;
  border: 0.125rem solid gray;
  padding: 0.5rem;
`;

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState('');

  const {
    customKeyboardRef,
    isOnScreen,
    showKeyboard,
    setShowKeyboard,
  } = useCustomKeyboard();

  return (
    <Wrapper>
      <TestInput
        placeholder="Focus input..."
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setShowKeyboard(true)}
        onBlur={() => setShowKeyboard(false)}
        inputMode={isOnScreen ? "none" : "numeric"}
        ref={inputRef}
      />

      <CustomKeyboard
        inputRef={inputRef}
        inputValue={inputValue}
        setInputValue={setInputValue}
        showKeyboard={showKeyboard}
        customKeyboardRef={customKeyboardRef}
      />
    </Wrapper>
  );
};
