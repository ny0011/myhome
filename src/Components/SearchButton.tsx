import { useRecoilState } from "recoil";
import { searchToggleState } from "../atoms";
import { DeleteIcon, SearchIcon } from "../Styles/Icons";
import { SearchButtonIcon } from "../Styles/SearchUI";

function SearchButton() {
  const [searchOpen, setSearchOpen] = useRecoilState(searchToggleState);
  const toggleSearchForm = () => {
    setSearchOpen((prev) => !prev);
  };

  return (
    <SearchButtonIcon
      layoutId="searchButton"
      type="button"
      onClick={toggleSearchForm}
    >
      {searchOpen ? <DeleteIcon /> : <SearchIcon />}
    </SearchButtonIcon>
  );
}

export default SearchButton;
