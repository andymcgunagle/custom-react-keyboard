import styled from "styled-components";

export const VerticalScrollBuffer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: transparent;
  height: 33.3vh;
  transform: translateY(100%);

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

export const KeyboardWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  
  backdrop-filter: blur(5px);
  background-color: rgba(212, 216, 220, 0.8);  
  padding: 1rem 0 2rem 0;
  transform: translateY(0);
  transition: transform 0.25s ease-out;
  
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

export const Keyboard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 0.5rem;
  
  margin: 0 auto;
  max-width: 400px;

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

export const Key = styled.button`  
  background-color: white;
  border-radius: 0.5rem;
  border: none;
  color: black;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: clamp(1rem, 2.5vw, 2rem);
  padding: 0.25rem 0;
  
  &.hidden {
    font-size: 0;
    padding: 0;
    visibility: hidden;
    transition: all 0.25s ease-out 0.275s;
  }

  &.show-system-keyboard {
    grid-column: 1 / 4;
  }

  /* LAPTOPS & DESKTOP */
  @media only screen and (min-device-width: 1025px) {
    display: ${process.env.NODE_ENV === 'production' && 'none'};
  }
`;