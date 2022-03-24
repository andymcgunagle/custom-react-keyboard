import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import NewCustomKeyboard from './components/NewCustomKeyboard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1rem;
`;

const StyledInput = styled.input`
  background-color: #f7f7f7;
  border-radius: 0.25rem;
  border: 0.125rem solid gray;
  padding: 0.5rem;
`;

export default function App() {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const [useSystemKeyboard, setUseSystemKeyboard] = useState(false);

  function showKeyboard() {
    document.querySelectorAll('.custom-keyboard')
      .forEach(element => element.classList.remove('hidden'));
  };

  function hideKeyboard() {
    document.querySelectorAll('.custom-keyboard')
      .forEach(element => element.classList.add('hidden'));
  };

  const handleInputFocus = () => {
    showKeyboard();
  };

  const handleInputBlur = () => {
    hideKeyboard();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleDocumentClick = (e: MouseEvent) => {
    // Ensures the custom keyboard is shown when the input is refocused after the iOS hide keyboard button is pressed
    if (e.target instanceof HTMLInputElement) {
      e.target.classList.contains('custom-keyboard-input') && setUseSystemKeyboard(false);
      e.target.inputMode === 'none' && showKeyboard();
    };

    // If click is on a custom keyboard button, do the following:
    if (e.target instanceof HTMLButtonElement && 'customKeyValue' in e.target.dataset) {

      // Is their a way to do this without using the ref?
      inputRef.current?.focus();

      const { customKeyValue } = (e.target as HTMLElement).dataset;

      if (customKeyValue === 'ABC') {
        setUseSystemKeyboard(true);
        hideKeyboard();
        return;
      };

      if (customKeyValue === 'del') {
        setInput(input.slice(0, -1));
        return;
      };

      setInput(input + customKeyValue);
      return;
    };
  };

  useEffect(() => {
    document.body.addEventListener('click', handleDocumentClick);
    return () => document.body.removeEventListener('click', handleDocumentClick);
  });

  return (
    <Wrapper>
      <p>
        Current keyboard: {useSystemKeyboard ? 'System' : 'Custom'}
      </p>

      <StyledInput
        inputMode={useSystemKeyboard ? 'text' : 'none'}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        ref={inputRef}
        type="text"
        value={input}
        className="custom-keyboard-input"
      />

      <NewCustomKeyboard />
    </Wrapper>
  );
};
