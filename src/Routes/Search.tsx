import SearchBar from "../Components/SearchBar";
import SearchButton from "../Components/SearchButton";
import { SearchContainer } from "../Styles/SearchUI";

function Search() {
  return (
    <SearchContainer>
      <SearchBar />
      <SearchButton />
    </SearchContainer>
  );
}

export default Search;
