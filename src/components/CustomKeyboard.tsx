import styled from 'styled-components';

const KeyboardWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  background-color: rgba(212, 216, 220, 0.8);  
  backdrop-filter: blur(5px);
  
  padding: 1rem 1rem 2rem 1rem;
  width: calc(100% - 2rem);

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
  gap: 0.5rem;
  
  width: 100%;
  max-width: 400px;
  margin: auto;

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
  
  padding: 0.5rem 0;
  width: 100%;
  
  background-color: white;
  border: none;
  border-radius: 0.5rem;
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
`;

export default function CustomKeyboard({
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

  const handleKeyClick = (keyValue: string) => {
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
        {keys.map(keyValue => {
          return (
            <Key
              key={keyValue}
              className={showKeyboard ? '' : "hidden"}
              onClick={() => handleKeyClick(keyValue)}
            >
              {keyValue}
            </Key>
          );
        })}
      </Keyboard>
    </KeyboardWrapper>
  );
};

interface CustomKeyboardProps {
  inputRef: React.RefObject<HTMLInputElement>,
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  showKeyboard: boolean,
};
