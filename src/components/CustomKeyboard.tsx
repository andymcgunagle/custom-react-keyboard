import { useCustomKeyboard } from '../hooks/useCustomKeyboard';
import {
  VerticalScrollBuffer,
  KeyboardWrapper,
  Keyboard,
  Key
} from './CustomKeyboardStyles';

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
  'ABC',
];

export default function CustomKeyboard() {
  useCustomKeyboard();

  return (
    <>
      <VerticalScrollBuffer className={`custom-keyboard hidden`} />
      <KeyboardWrapper className={`custom-keyboard hidden`}>
        <Keyboard className={`custom-keyboard hidden`}>
          {keys.map(keyValue => {
            return (
              <Key
                key={keyValue}
                data-custom-key-value={keyValue}
                className={`custom-keyboard hidden ${keyValue === 'ABC' && "show-system-keyboard"}`}
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
