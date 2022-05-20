import styled from "styled-components";
import Div, { A } from "../Styles/Tags";

const FooterContainer = styled.footer`
  flex-grow: 1;
`;

const Title = styled(Div)`
  font-size: 0.8em;
`;

function Footer() {
  return (
    <FooterContainer>
      <Div>
        <A
          href="https://github.com/ny0011/myhome"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Title>@ny0011</Title>
        </A>
      </Div>
    </FooterContainer>
  );
}

export default Footer;
