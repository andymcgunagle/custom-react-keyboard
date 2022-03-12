import { useState } from 'react';

import styled from 'styled-components';

const TestInput = styled.input`
  background-color: #f2f1f1;
  border-radius: 0.25rem;
  border: 0.125rem solid gray;
  margin: auto;
  padding: 0.5rem;
`;

const KeyboardWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  background-color: rgba(212, 216, 220, 0.8);  
  backdrop-filter: blur(5px);
  
  width: 100%;

  transform: translateY(0);
  transition: transform 0.25s ease-out;
  
  &.hidden {
    transform: translateY(110%);
    visibility: hidden;
    transition: all 0.25s ease-out;
  }
`;

const Keyboard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  place-items: center;
  gap: 2rem;

  padding: 2rem 1rem;
  margin: auto;
  width: fit-content;

  &.hidden {
    gap: 0;
    padding: 0;
    visibility: hidden;
    transition: all 0.25s ease-out 0.26s;
  }
`;

const Key = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100%;
  padding: 0.5rem;
  width: 100%;
  
  background-color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: clamp(1rem, 2.5vw, 2rem);
  
  &.hidden {
    font-size: 0;
    height: 0;
    padding: 0;
    visibility: hidden;
    width: 0;
    transition: all 0.25s ease-out 0.26s;
  }
`;

export default function App() {
  const [myInput, setMyInput] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);

  const keys = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
    '0',
    'del',
  ];

  return (
    <div>
      <TestInput
        placeholder="CLICK ME"
        type="text"
        value={myInput}
        onChange={(e) => setMyInput(e.target.value)}
        onFocus={() => setShowKeyboard(true)}
        onBlur={() => setShowKeyboard(false)}
        inputMode="none"
      />
      <KeyboardWrapper className={showKeyboard ? '' : "hidden"}>
        <Keyboard className={showKeyboard ? '' : "hidden"}>
          {keys.map(num => {
            return (
              <Key
                key={num}
                className={showKeyboard ? '' : "hidden"}
              >
                {num}
              </Key>
            );
          })}
        </Keyboard>
      </KeyboardWrapper>
    </div>
  );
};
