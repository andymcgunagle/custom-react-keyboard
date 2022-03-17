import { useRef, useState } from 'react';

import styled from 'styled-components';
import CustomKeyboard from './components/CustomKeyboard';
import CustomVerticalKeyboard from './components/CustomVerticalKeyboard';

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

const Button = styled.button`
  background-color: #8383fb;
  border: none;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  width: fit-content;
`;

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(process.env.NODE_ENV === 'development');
  const [useCustomVerticalKeyboard, setUseCustomVerticalKeyboard] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Wrapper>
      <TestInput
        placeholder="Focus input..."
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setShowKeyboard(true)}
        onBlur={() => setShowKeyboard(false)}
        inputMode="none"
        ref={inputRef}
      />

      <Button
        onClick={() => setUseCustomVerticalKeyboard(!useCustomVerticalKeyboard)}
      >
        Keyboard type: {useCustomVerticalKeyboard ? 'Vertical' : 'Horizontal'}
      </Button>

      {useCustomVerticalKeyboard ?
        <CustomVerticalKeyboard
          inputRef={inputRef}
          inputValue={inputValue}
          setInputValue={setInputValue}
          showKeyboard={showKeyboard}
        />
        :
        <CustomKeyboard
          inputRef={inputRef}
          inputValue={inputValue}
          setInputValue={setInputValue}
          showKeyboard={showKeyboard}
        />}
    </Wrapper>
  );
};
