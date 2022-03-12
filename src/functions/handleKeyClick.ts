export const handleKeyClick = ({
  inputRef,
  inputValue,
  keyValue,
  setInputValue,
}: HandleKeyClickArgs) => {
  inputRef.current?.focus();

  if (inputValue === '' && keyValue === 'del') return;

  if (keyValue === 'del') {
    setInputValue(inputValue.slice(0, -1));
  } else {
    setInputValue(inputValue + keyValue);
  };
};

interface HandleKeyClickArgs {
  inputRef: React.RefObject<HTMLInputElement>,
  inputValue: string,
  keyValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
};