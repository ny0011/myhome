import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CloseIcon, SearchIcon } from "../Styles/Icons";
import MotionDiv, { MotionButton, MotionInput } from "../Styles/Motions";
import { DivColumn, Form } from "../Styles/Tags";

const NAVER_SEARCH =
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=";

const ERROR_MESSAGE_COUNTER = 3;
interface IForm {
  keyword: string;
}

function Search() {
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearchForm = () => {
    setSearchOpen((prev) => !prev);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, submitCount },
  } = useForm<IForm>();

  const searchKeyword: SubmitHandler<IForm> = (data) => {
    const { keyword } = data;
    window.open(`${NAVER_SEARCH}${keyword}`, "_blank");
    reset({ keyword: "" });
    toggleSearchForm();
  };

  return (
    <>
      {searchOpen ? (
        <>
          <Form onSubmit={handleSubmit(searchKeyword)}>
            <MotionInput
              autoFocus
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
              }}
              {...register("keyword", { required: true })}
            ></MotionInput>
            <MotionButton
              animate={{ x: searchOpen ? 20 : 0 }}
              layoutId="searchButton"
              type="button"
              onClick={toggleSearchForm}
            >
              <CloseIcon />
            </MotionButton>
          </Form>
          <DivColumn>
            {submitCount < ERROR_MESSAGE_COUNTER && errors.keyword && (
              <MotionDiv
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, display: "none" }}
                transition={{
                  delay: 1,
                }}
              >
                검색할 단어를 넣어줘!
              </MotionDiv>
            )}
          </DivColumn>
        </>
      ) : (
        <MotionButton layoutId="searchButton" onClick={toggleSearchForm}>
          <SearchIcon />
        </MotionButton>
      )}
    </>
  );
}

export default Search;
