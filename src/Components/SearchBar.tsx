import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { searchToggleState } from "../atoms";
import { CloseIcon, SearchIcon } from "../Styles/Icons";
import MotionDiv, { MotionButton, MotionInput } from "../Styles/Motions";
import { DivColumn, Form } from "../Styles/Tags";

const NAVER_SEARCH =
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=";

const ERROR_MESSAGE_COUNTER = 3;
interface IForm {
  keyword: string;
}

function SearchBar() {
  const [searchOpen, setSearchOpen] = useRecoilState(searchToggleState);
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
      {searchOpen && (
        <Form onSubmit={handleSubmit(searchKeyword)}>
          <MotionInput
            autoFocus
            initial={{ scaleX: 0, x: 50 }}
            animate={{
              scaleX: 1,
              x: 0,
            }}
            {...register("keyword", { required: true })}
          ></MotionInput>
        </Form>
      )}

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
  );
}

export default SearchBar;
