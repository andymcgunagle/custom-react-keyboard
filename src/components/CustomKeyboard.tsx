import { useRef } from 'react';
import styled from 'styled-components';

import { handleKeyClick } from '../functions/handleKeyClick';
import useOnScreen from '../hooks/useOnScreen';

const VerticalScrollBuffer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);

  height: 33.3vh;
  width: 100%;

  &.hidden {
    height: 0;
    visibility: hidden;
    transition: all 0.25s ease-out;
  }

  /* LAPTOPS & DESKTOP */
  @media only screen and (min-device-width: 1025px) {
    display: ${process.env.NODE_ENV === 'production' && 'none'};
  }
`;

const KeyboardWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translateY(0);

  padding: 1rem 1rem 2rem 1rem;
  width: calc(100% - 2rem);

  background-color: rgba(212, 216, 220, 0.8);  
  backdrop-filter: blur(5px);

  transition: transform 0.25s ease-out;
  
  &.hidden {
    transform: translateY(110%);
    visibility: hidden;
    transition: all 0.25s ease-out;
  }

  /* LAPTOPS & DESKTOP */
  @media only screen and (min-device-width: 1025px) {
    display: ${process.env.NODE_ENV === 'production' && 'none'};
  }
`;

const Keyboard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  place-items: center;
  gap: 0.5rem;
  
  margin: auto;
  max-width: 400px;
  width: 100%;

  &.hidden {
    gap: 0;
    visibility: hidden;
    transition: all 0.25s ease-out 0.275s;
  }

  /* LAPTOPS & DESKTOP */
  @media only screen and (min-device-width: 1025px) {
    display: ${process.env.NODE_ENV === 'production' && 'none'};
  }
`;

const Key = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 0.5rem 0;
  width: 100%;
  
  background-color: white;
  border: none;
  border-radius: 0.5rem;
  color: black;
  cursor: pointer;
  
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: clamp(1rem, 2.5vw, 2rem);
  
  &.hidden {
    font-size: 0;
    padding: 0;
    visibility: hidden;
    width: 0;
    transition: all 0.25s ease-out 0.275s;
  }

  /* LAPTOPS & DESKTOP */
  @media only screen and (min-device-width: 1025px) {
    display: ${process.env.NODE_ENV === 'production' && 'none'};
  }
`;

export default function CustomKeyboard({
  customKeyboardRef,
  inputRef,
  inputValue,
  setInputValue,
  showKeyboard,
}: CustomKeyboardProps) {

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
    <>
      <VerticalScrollBuffer className={showKeyboard ? '' : "hidden"} />
      <KeyboardWrapper ref={customKeyboardRef} className={showKeyboard ? '' : "hidden"}>
        <Keyboard className={showKeyboard ? '' : "hidden"}>
          {keys.map(keyValue => {
            return (
              <Key
                key={keyValue}
                className={showKeyboard ? '' : "hidden"}
                onClick={() => handleKeyClick({
                  inputRef,
                  inputValue,
                  keyValue,
                  setInputValue,
                })}
              >
                {keyValue}
              </Key>
            );
          })}
        </Keyboard>
      </KeyboardWrapper>
    </>
  );
};

interface CustomKeyboardProps {
  customKeyboardRef: React.RefObject<HTMLDivElement>,
  inputRef: React.RefObject<HTMLInputElement>,
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  showKeyboard: boolean,
};
