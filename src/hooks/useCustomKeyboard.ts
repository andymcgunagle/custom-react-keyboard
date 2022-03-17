import { useEffect, useState, useRef } from 'react';

export default function useCustomKeyboard() {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [isOnScreen, setIsOnScreen] = useState(false);

  const customKeyboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log('CALLBACK');
      setIsOnScreen(entry.isIntersecting);
    });

    if (customKeyboardRef.current !== null) {
      observer.observe(customKeyboardRef.current);
    };

    return () => { observer.disconnect(); };
  }, []);

  return {
    customKeyboardRef,
    isOnScreen,
    showKeyboard,
    setShowKeyboard,
  };
};
