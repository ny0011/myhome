import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  SearchBarContainer,
  SearchBarErrorMsg,
  SearchBarForm,
  SearchBarInput,
} from "../Styles/SearchUI";

const NAVER_SEARCH =
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=";

const ERROR_MESSAGE_COUNTER = 3;
interface IForm {
  keyword: string;
}
const DEFAULT_KEYWORD = { keyword: "" };

function SearchBar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, submitCount, isSubmitSuccessful },
  } = useForm<IForm>({ defaultValues: DEFAULT_KEYWORD });

  const searchKeyword: SubmitHandler<IForm> = (data) => {
    const { keyword } = data;
    window.open(`${NAVER_SEARCH}${keyword}`, "_blank");
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(DEFAULT_KEYWORD);
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <SearchBarContainer>
      <SearchBarForm onSubmit={handleSubmit(searchKeyword)}>
        <SearchBarInput
          placeholder="네이버 검색 꼬!"
          {...register("keyword", { required: true })}
        ></SearchBarInput>
      </SearchBarForm>
      {submitCount < ERROR_MESSAGE_COUNTER && errors.keyword && (
        <SearchBarErrorMsg
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, display: "none" }}
          transition={{
            delay: 1,
          }}
        >
          검색할 단어를 넣어줘!
        </SearchBarErrorMsg>
      )}
    </SearchBarContainer>
  );
}

export default SearchBar;
