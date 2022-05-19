import styled from "styled-components";
import Div, { A } from "../Styles/Tags";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 30px;
`;

function Footer() {
  return (
    <Div>
      <FooterContainer>
        <A
          href="https://github.com/ny0011/myhome"
          rel="noreferrer noopener"
          target="_blank"
        >
          @ny0011
        </A>
      </FooterContainer>
    </Div>
  );
}

export default Footer;
