import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-family: 'Marck Script', cursive;
`;

export const Items = styled.li`
  width: 85%;
  display: flex;
  justify-content: space-between;
  padding: 5px;

  border-bottom: 2px #404b51 dotted;
  font-size: 15px;
  line-height: 1;

  span:nth-child(odd) {
    padding-right: 3px;
    color: #032a3f;
  }
  span:nth-child(even) {
    float: right;
    padding-left: 3px;
    color: #b70dc7;
  }
  span {
    /* background: white; */
    position: relative;
    bottom: -7px;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  /* margin-top: 2rem; */
  background-color: #0e39fe;
  color: white;
  font-size: 0.75rem;
  text-transform: uppercase;
  width: 40%;

  letter-spacing: 0.15em;
  transition: ease-in 1000ms;
  &:hover {
    outline: 3px solid #090c9b;
  }
`;
