import styled from 'styled-components'

export const Button = styled.div`
  cursor: pointer;
  background: #f231a5;
  border: none;
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  box-shadow: 4px 4px 0px #be0374;
  font-size: 30px;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: none;
  }
`
