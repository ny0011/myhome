import { useState } from "react";
import { useForm } from "react-hook-form";
import MotionDiv, { MotionButton, MotionInput } from "../Styles/Motions";
import Div, { Form } from "../Styles/Tags";

const NAVER_SEARCH =
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=";

function Search() {
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearchForm = () => {
    setSearchOpen((prev) => !prev);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const searchKeyword = (data: any) => {
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
              ❌
            </MotionButton>
          </Form>
          <Div>
            {errors.keyword && (
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
          </Div>
        </>
      ) : (
        <MotionButton layoutId="searchButton" onClick={toggleSearchForm}>
          🔍
        </MotionButton>
      )}
    </>
  );
}

export default Search;
