import { useState } from "react";
import { useRecoilState } from "recoil";
import { searchToggleState } from "../atoms";
import { CloseIcon, SearchIcon } from "../Styles/Icons";
import { MotionButton } from "../Styles/Motions";
import { DivColumn, Form } from "../Styles/Tags";

function SearchButton() {
  const [searchOpen, setSearchOpen] = useRecoilState(searchToggleState);
  const toggleSearchForm = () => {
    setSearchOpen((prev) => !prev);
  };

  return (
    <MotionButton
      animate={{ x: searchOpen ? 20 : 0 }}
      layoutId="searchButton"
      type="button"
      onClick={toggleSearchForm}
    >
      {searchOpen ? <CloseIcon /> : <SearchIcon />}
    </MotionButton>
  );
}

export default SearchButton;
