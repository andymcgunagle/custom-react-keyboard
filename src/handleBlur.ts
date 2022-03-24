export const handleBlur = (blurEvent: React.FocusEvent<HTMLInputElement> | undefined, setShowCustomKeyboard: (value: React.SetStateAction<boolean>) => void) => {
  console.log(blurEvent);

  // Related target is experimental and isn't working on Chrome on the iPad
  if (blurEvent?.relatedTarget && 'customKeyValue' in (blurEvent?.relatedTarget as HTMLElement).dataset) {
    blurEvent?.target.focus();
  } else {
    setShowCustomKeyboard(false);
  };
};

// const handleBlur = (blurEvent: React.FocusEvent<HTMLInputElement> | undefined) => {
//   document.body.addEventListener('click', (e: MouseEvent) => {
//     if ('customKeyValue' in (e.target as HTMLElement).dataset) {
//       blurEvent?.target.focus();
//       handleClick(e);
//       return;
//     }

//     setShowCustomKeyboard(false);
//   });
// };