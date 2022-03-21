// https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport

import { useEffect, useState, useRef } from 'react';

export default function useCustomKeyboard() {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [isOnScreen, setIsOnScreen] = useState(false);

  const customKeyboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (customKeyboardRef.current) {
      const rect = customKeyboardRef.current?.getBoundingClientRect();

      // After the initial render, rect.bottom === window.innerHeight when the keyboard is hidden
      // console.log(`\n🪵 rect.bottom: ${rect.bottom}\n`);
      // console.log(`\n🪵 window.innerHeight: ${window.innerHeight}\n`);

      if (
        // This first check is the only one that should change
        rect.bottom > (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top >= 0 && // This should always be true
        rect.right === window.innerWidth // This should also always be true
      ) {
        setIsOnScreen(true);
        // console.log(true);
      } else {
        setIsOnScreen(false);
        // console.log(false);
      };
    }
  }, [showKeyboard]);

  return {
    customKeyboardRef,
    isOnScreen,
    showKeyboard,
    setShowKeyboard,
  };
};
