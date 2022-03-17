import { useEffect, useRef, useState } from "react";

export default function useOnScreen() {
  const customKeyboardRef = useRef<HTMLDivElement>(null);
  const [isCustomKeyboardVisible, setIsCustomKeyboardVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsCustomKeyboardVisible(entry.isIntersecting);
    });

    if (customKeyboardRef.current !== null) {
      observer.observe(customKeyboardRef.current);
    };

    // Remove the observer as soon as the component is unmounted
    return () => observer.disconnect();

  }, []);

  return { customKeyboardRef, isCustomKeyboardVisible };
};
