import styled from 'styled-components';
import { handleKeyClick } from '../functions/handleKeyClick';

const HorizontalScrollBuffer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);

  height: 100%;
  width: 25vw;

  &.hidden {
    width: 0;
    visibility: hidden;
    transition: all 0.25s ease-out;
  }

  @media only screen and (min-device-width: 992px) {
    display: ${process.env.NODE_ENV !== 'development' && 'none'};
  }
`;

const VerticalKeyboardWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  background-color: rgba(212, 216, 220, 0.8);  
  backdrop-filter: blur(5px);
  
  padding: 1rem;
  height: calc(100% - 2rem);
  max-height: 100vh;
  overflow-y: scroll;
  
  transform: translateX(0);
  transition: transform 0.25s ease-out;
  
  &.hidden {
    padding: 0;
    transform: translateX(110%);
    visibility: hidden;
    transition: transform 0.25s ease-out, visibility 0.25s ease-out, padding 0.25s ease-out 0.275s;
  }

  @media only screen and (min-device-width: 992px) {
    display: ${process.env.NODE_ENV !== 'development' && 'none'};
  }
`;

const VerticalKeyboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  height: 100%;
  max-height: 600px;

  &.hidden {
    gap: 0;
    visibility: hidden;
    transition: all 0.25s ease-out 0.275s;
  }

  @media only screen and (min-device-width: 992px) {
    display: ${process.env.NODE_ENV !== 'development' && 'none'};
  }
`;

const VerticalKeyboardKey = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 0.125rem 0.75rem;
  height: 100%;
  
  background-color: white;
  border-radius: 0.5rem;
  border: none;
  color: black;
  cursor: pointer;
  
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  
  &.hidden {
    font-size: 0;
    padding: 0;
    visibility: hidden;
    transition: all 0.25s ease-out 0.275s;
  }

  @media only screen and (min-device-width: 992px) {
    display: ${process.env.NODE_ENV !== 'development' && 'none'};
  }
`;

export default function CustomVerticalKeyboard({
  inputRef,
  inputValue,
  setInputValue,
  showKeyboard,
}: CustomVerticalKeyboardProps) {

  const verticalKeyboardKeys = [
    '0',
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
    'del',
  ];

  return (
    <>
      <HorizontalScrollBuffer className={showKeyboard ? '' : "hidden"} />
      <VerticalKeyboardWrapper className={showKeyboard ? '' : "hidden"}>
        <VerticalKeyboard className={showKeyboard ? '' : "hidden"}>
          {verticalKeyboardKeys.map(keyValue => {
            return (
              <VerticalKeyboardKey
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
              </VerticalKeyboardKey>
            );
          })}
        </VerticalKeyboard>
      </VerticalKeyboardWrapper>
    </>
  );
};

interface CustomVerticalKeyboardProps {
  inputRef: React.RefObject<HTMLInputElement>,
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  showKeyboard: boolean,
};
