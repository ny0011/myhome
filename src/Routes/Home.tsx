import styled from "styled-components";
import Bookmark from "./Bookmark";
import Search from "./Search";
import { DivColumn } from "../Styles/Tags";
import Footer from "../Components/Footer";

const SearchDiv = styled(DivColumn)`
  padding-top: 40px;
`;

function Home() {
  return (
    <>
      <SearchDiv>
        <Search />
      </SearchDiv>
      <SearchDiv>
        <Bookmark />
      </SearchDiv>
      <Footer />
    </>
  );
}

export default Home;
