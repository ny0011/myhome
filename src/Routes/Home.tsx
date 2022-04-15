import styled from "styled-components";
import Bookmark from "./Bookmark";
import Search from "./Search";
import { DivColumn } from "../Styles/Tags";

const SearchDiv = styled(DivColumn)`
  padding-top: 30px;
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
    </>
  );
}

export default Home;
