import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 1em;
  color: rgba(0, 0, 0, 0.6);

  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);
  transition: color 1000ms;
  text-align: center;

  &:hover {
    text-shadow: 1px 1px white, 2px 2px tomato;
    color: crimson;
    /* color: hsl(300, 100%, 30%); */
  }
`;

export const Contacts = styled.h2`
  margin-top: 1em;
  color: rgba(0, 0, 0, 0.6);

  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);

  transition: color 0.5ms;
  text-align: center;

  &:hover {
    text-shadow: 1px 1px white, 2px 2px tomato;
    color: crimson;
    /* color: hsl(300, 100%, 30%); */
  }
`;
