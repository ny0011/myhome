import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivColumn = styled(Div)`
  flex-direction: column;
`;

export const A = styled.a`
  color: ${(props) => props.theme.white.lighter};
  text-decoration: none;
  font-size: 1.5em;
  cursor: pointer;
  padding: 3px;
  display: inline-block;
  border: 1px solid transparent;

  &:link {
    color: ${(props) => props.theme.white.lighter};
  }
  &:visited {
    color: ${(props) => props.theme.pink.lighter};
  }
  &:hover {
    border: 1px solid ${(props) => props.theme.pink.lighter};
  }
`;

export default Div;
