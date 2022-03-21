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
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    handleBlur,
    handleFocus,
    inputModeValue,
    setInputModeValue,
    showKeyboard,
    setShowKeyboard,
  } = useCustomKeyboard();

  return (
    <Wrapper>
      <TestInput
        inputMode={inputModeValue}
        onBlur={handleBlur}
        onChange={e => setInputValue(e.target.value)}
        onFocus={handleFocus}
        placeholder="Focus input..."
        ref={inputRef}
        type="text"
        value={inputValue}
      />

      <CustomKeyboard
        inputRef={inputRef}
        inputValue={inputValue}
        setInputModeValue={setInputModeValue}
        setInputValue={setInputValue}
        setShowKeyboard={setShowKeyboard}
        showKeyboard={showKeyboard}
      />
    </Wrapper>
  );
};
