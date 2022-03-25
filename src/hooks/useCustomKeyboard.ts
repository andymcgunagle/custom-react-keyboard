import { useRef, useEffect } from "react";

// Helper function which can also be used onFocus in inputs
export function showKeyboard() {
  document.querySelectorAll('.custom-keyboard')
    .forEach(element => element.classList.remove('hidden'));
};

// Helper function which can also be used onBlur in inputs
export function hideKeyboard() {
  document.querySelectorAll('.custom-keyboard')
    .forEach(element => element.classList.add('hidden'));
};

export function useCustomKeyboard() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDocumentClick = (e: MouseEvent) => {
    // If the click is on an input, assign it to the ref and show the custom keyboard
    if (e.target instanceof HTMLInputElement) {
      inputRef.current = e.target;
      inputRef.current.inputMode = 'none';
      showKeyboard();
    };

    // If the click is on a custom keyboard button, do the following...
    if (
      e.target instanceof HTMLButtonElement &&
      'customKeyValue' in e.target.dataset &&
      inputRef.current
    ) {
      // First, maintain focus on the input
      inputRef.current?.focus();

      const { customKeyValue } = (e.target as HTMLElement).dataset;

      // Show the system keyboard
      if (customKeyValue === 'ABC') {
        inputRef.current.inputMode = 'text';
        hideKeyboard();
        return;
      };

      // Delete the last character
      if (customKeyValue === 'del') {
        inputRef.current.value = inputRef.current?.value.slice(0, -1);
        return;
      };

      // Handle all other custom keyboard buttons
      inputRef.current.value += customKeyValue;
      return;
    };
  };

  useEffect(() => {
    document.body.addEventListener('click', handleDocumentClick);
    return () => document.body.removeEventListener('click', handleDocumentClick);
  });
};