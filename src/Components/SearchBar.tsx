import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { searchToggleState } from "../atoms";
import MotionDiv, { MotionInput } from "../Styles/Motions";
import { DivColumn, Form } from "../Styles/Tags";

const NAVER_SEARCH =
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=";

const ERROR_MESSAGE_COUNTER = 3;
interface IForm {
  keyword: string;
}

const ErrorMsg = styled(MotionDiv)`
  position: absolute;
  top: 5px;
`;

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
        <DivColumn>
          <Form onSubmit={handleSubmit(searchKeyword)}>
            <MotionInput
              autoFocus
              initial={{ scaleX: 0.1, x: 50 }}
              animate={{
                scaleX: 1,
                x: 0,
              }}
              transition={{ type: "spring", stiffness: 100 }}
              {...register("keyword", { required: true })}
            ></MotionInput>
          </Form>
          {submitCount < ERROR_MESSAGE_COUNTER && errors.keyword && (
            <ErrorMsg
              style={{ marginTop: "10px", color: "white" }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, display: "none" }}
              transition={{
                delay: 1,
              }}
            >
              검색할 단어를 넣어줘!
            </ErrorMsg>
          )}
        </DivColumn>
      )}
    </>
  );
}

export default SearchBar;
