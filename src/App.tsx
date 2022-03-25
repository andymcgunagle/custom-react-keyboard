import { useEffect, useState } from 'react';

import styled from 'styled-components';

import CustomKeyboard from './components/CustomKeyboard';
import { hideKeyboard, showKeyboard } from './hooks/useCustomKeyboard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;

  padding: 1rem;
`;

const StyledInput = styled.input`
  background-color: #f7f7f7;
  border-radius: 0.25rem;
  border: 0.125rem solid gray;
  padding: 0.5rem;
`;

export default function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  // ISSUE: Custom keyboard input not followed by system keyboard input is not saved into state. Need to trigger the setState function somehow when a custom keyboard button is clicked?

  return (
    <Wrapper>
      <StyledInput
        onBlur={() => hideKeyboard()}
        onFocus={() => showKeyboard()}
        onChange={e => setInput1(e.target.value)}
        type="text"
        value={input1}
        className="custom-keyboard-input"
        placeholder='Input 1'
      />

      <StyledInput
        onBlur={() => hideKeyboard()}
        onFocus={() => showKeyboard()}
        onChange={e => setInput2(e.target.value)}
        type="text"
        value={input2}
        className="custom-keyboard-input"
        placeholder='Input 2'
      />

      <CustomKeyboard />
    </Wrapper>
  );
};
