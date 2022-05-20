import styled from "styled-components";
import Bookmark from "./Bookmark";
import Search from "./Search";
import { DivColumn } from "../Styles/Tags";
import Footer from "../Components/Footer";

const SearchDiv = styled(DivColumn)`
  align-items: flex-end;
  padding-top: 20px;
  padding-right: 15px;
`;

const BookmarkDiv = styled(DivColumn)`
  padding-top: 40px;
  justify-content: flex-start;
  min-height: 400px;
`;

const BodyDiv = styled.div`
  flex-grow: 4;
`;

function Home() {
  return (
    <>
      <SearchDiv>
        <Search />
      </SearchDiv>
      <BookmarkDiv>
        <Bookmark />
      </BookmarkDiv>
      <BodyDiv />
      <Footer />
    </>
  );
}

export default Home;
