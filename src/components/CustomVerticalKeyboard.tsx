import styled from 'styled-components';

const KeyboardWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  background-color: rgba(212, 216, 220, 0.8);  
  backdrop-filter: blur(5px);
  
  padding: 1rem;
  height: calc(100% - 2rem);
  
  transform: translateX(0);
  transition: transform 0.25s ease-out;
  
  &.hidden {
    padding: 0;
    transform: translateX(110%);
    visibility: hidden;
    transition: transform 0.25s ease-out, visibility 0.25s ease-out, padding 0.25s ease-out 0.275s;
  }
`;

const Keyboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &.hidden {
    gap: 0;
    visibility: hidden;
    transition: all 0.25s ease-out 0.275s;
  }
`;

const Key = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 0.5rem;
  
  background-color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  
  &.hidden {
    font-size: 0;
    padding: 0;
    visibility: hidden;
    transition: all 0.25s ease-out 0.275s;
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

  const handleKeyClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    keyValue: string
  ) => {
    e.preventDefault();
    inputRef.current?.focus();

    if (keyValue === 'del') {
      setInputValue(inputValue.slice(0, -1));
    } else {
      setInputValue(inputValue + keyValue);
    };
  };

  return (
    <KeyboardWrapper className={showKeyboard ? '' : "hidden"}>
      <Keyboard className={showKeyboard ? '' : "hidden"}>
        {verticalKeyboardKeys.map(keyValue => {
          return (
            <Key
              key={keyValue}
              className={showKeyboard ? '' : "hidden"}
              onClick={(e) => handleKeyClick(e, keyValue)}
            >
              {keyValue}
            </Key>
          );
        })}
      </Keyboard>
    </KeyboardWrapper>
  );
};

interface CustomVerticalKeyboardProps {
  inputRef: React.RefObject<HTMLInputElement>,
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  showKeyboard: boolean,
};