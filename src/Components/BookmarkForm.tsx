import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { bookmarkNumberState, bookmarkState, filterBookmark } from "../atoms";
import MotionDiv, { MotionInput } from "../Styles/Motions";
import Div, { Form } from "../Styles/Tags";

interface IForm {
  name: string;
  url: string;
}

interface IProps {
  number?: number;
}

const FormButton = styled.button`
  padding: 5px 10px;
  font-size: 1.3em;
  border-radius: 20% / 40%;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.blue.lighter};
  width: 80px;
  margin-left: 10px;
`;

const Title = styled(MotionDiv)`
  color: ${(props) => props.theme.white.lighter};
  font-size: 1.5em;
`;
const Error = styled(Div)`
  color: ${(props) => props.theme.white.lighter};
  font-size: 1em;
  position: absolute;
  top: -20px;
`;

const LinkInput = styled(MotionInput)`
  margin: 20px 0px 25px 0px;
  border: 3px solid ${(props) => props.theme.blue.lighter};
`;

function BookmarkForm({ number }: IProps) {
  const [isClicked, setIsClicked] = useRecoilState(bookmarkNumberState);
  const closeForm = () => {
    setIsClicked(0);
  };
  const bookmark = useRecoilValue(filterBookmark);
  const title = bookmark ? bookmark.title : "";
  const link = bookmark ? bookmark.link : "";
  console.log(bookmark);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>();

  const setBookmark = useSetRecoilState(bookmarkState);
  const searchKeyword: SubmitHandler<IForm> = (data) => {
    const { name, url } = data;
    setBookmark((bookmarks) => {
      return bookmarks.map((item) => {
        if (item.id !== number) {
          return item;
        }
        return { id: number, title: name, link: url };
      });
    });
    reset({ name: "", url: "" });
    closeForm();
  };

  return (
    <MotionDiv>
      <Form
        onSubmit={handleSubmit(searchKeyword)}
        style={{ flexDirection: "column" }}
      >
        <Title>링크 이름</Title>
        <LinkInput
          defaultValue={title}
          {...register("name", { required: true, maxLength: 10 })}
        ></LinkInput>
        <Div style={{ position: "relative", width: "100%" }}>
          {isClicked && errors.name ? (
            <Error>10자 이내로 적어주세요</Error>
          ) : null}
        </Div>
        <Title>링크 주소</Title>
        <LinkInput
          defaultValue={link}
          {...register("url", { required: true })}
        ></LinkInput>

        <Div style={{ marginTop: "20px" }}>
          <FormButton type="submit">제출</FormButton>
          <FormButton onClick={closeForm}>닫기</FormButton>
        </Div>
      </Form>
    </MotionDiv>
  );
}

export default BookmarkForm;
