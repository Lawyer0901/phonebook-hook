import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: blue; */
  /* max-width: 320px; */
  color: #090c9b;
  padding: 15px;
  outline: #9c1010;
`;
export const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 0.85rem 1rem;
  margin-top: 2rem;
  background-color: #0e39fe;
  color: white;
  font-size: 0.75rem;
  text-transform: uppercase;
  width: 65%;

  letter-spacing: 0.15em;
  transition: ease-in 1000ms;
  &:hover {
    outline: 3px solid #090c9b;
  }
`;
export const Label = styled.label`
  color: tomato;

  display: flex;
  flex-direction: column;
  gap: 5px;
  text-shadow: 1px 1px white, 1px 1px #777;
  color: #333;
  transition: all 1s;

  transition: ease-in-out 1000ms;

  &:hover {
    text-shadow: 1px 1px white, 2px 2px tomato;
    color: crimson;
  }
`;

export const Input = styled.input`
  padding: 10px 20px;
  border: 4px solid white;
  /* margin: 0 1.5rem; */

  &::placeholder {
    color: #9c1010;
  }
  &:focus {
    color: #0e39fe;

    outline: 0;
    border: 3px solid #0e39fe;
  }
`;
