import styled from 'styled-components';

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

  backdrop-filter: blur(5px);
  background-color: rgba(212, 216, 220, 0.8);  
  padding: 1rem 1rem 2rem 1rem;
  transition: transform 0.25s ease-out;
  width: calc(100% - 2rem);
  
  &.hidden {
    transform: translateY(100%);
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
  position: relative;
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
  
  background-color: white;
  border-radius: 0.5rem;
  border: none;
  color: black;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: clamp(1rem, 2.5vw, 2rem);
  padding: 0.5rem 0;
  width: 100%;
  
  &.hidden {
    font-size: 0;
    padding: 0;
    visibility: hidden;
    width: 0;
    transition: all 0.25s ease-out 0.275s;
  }

  &.show-system-keyboard {
    position: absolute;
    right: -6.25rem;
    top: 0;

    padding: 0.5rem 1rem;
    width: fit-content;
  }

  /* LAPTOPS & DESKTOP */
  @media only screen and (min-device-width: 1025px) {
    display: ${process.env.NODE_ENV === 'production' && 'none'};
  }
`;

export default function CustomKeyboard({
  inputRef,
  inputValue,
  setInputModeValue,
  setInputValue,
  setShowKeyboard,
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
    'ABC', // keyboard emoji as placeholder - use icon in production?
  ];

  const handleKeyClick = ({
    inputRef,
    inputValue,
    keyValue,
    setInputModeValue,
    setInputValue,
    setShowKeyboard,
  }: HandleKeyClickArgs) => {
    inputRef.current?.focus();

    if (inputValue === '' && keyValue === 'del') return;

    if (keyValue === 'ABC') {
      setInputModeValue("text");
      setShowKeyboard(false);
      return;
    };

    if (keyValue === 'del') {
      setInputValue(inputValue.slice(0, -1));
      return;
    };

    setInputValue(inputValue + keyValue);
  };

  return (
    <>
      <VerticalScrollBuffer className={showKeyboard ? '' : "hidden"} />
      <KeyboardWrapper
        className={showKeyboard ? '' : "hidden"}
      >
        <Keyboard className={showKeyboard ? '' : "hidden"}>
          {keys.map(keyValue => {
            return (
              <Key
                key={keyValue}
                className={`${keyValue === 'ABC' && "show-system-keyboard"} ${!showKeyboard && "hidden"}`}
                onClick={() => handleKeyClick({
                  inputRef,
                  inputValue,
                  keyValue,
                  setInputModeValue,
                  setInputValue,
                  setShowKeyboard,
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
  inputRef: React.RefObject<HTMLInputElement>,
  inputValue: string,
  setInputModeValue: React.Dispatch<React.SetStateAction<"none" | "text">>,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  setShowKeyboard: React.Dispatch<React.SetStateAction<boolean>>,
  showKeyboard: boolean,
};

interface HandleKeyClickArgs {
  inputRef: React.RefObject<HTMLInputElement>,
  inputValue: string,
  keyValue: string,
  setInputModeValue: React.Dispatch<React.SetStateAction<"none" | "text">>,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  setShowKeyboard: React.Dispatch<React.SetStateAction<boolean>>,
};
