import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { bookmarkNumberState, bookmarkState, filterBookmark } from "../atoms";
import { DeleteIcon } from "../Styles/Icons";
import MotionDiv, { MotionInput } from "../Styles/Motions";
import Div, { Form } from "../Styles/Tags";

interface IForm {
  name: string;
  url: string;
}

interface IProps {
  number?: number;
}

const Overlay = styled(MotionDiv)`
  align-items: normal;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const OverlayBackground = styled(MotionDiv)`
  top: 30px;
  width: 300px;
  height: 500px;
  background-color: ${(props) => props.theme.white.lighter};
  border-radius: 15px;
  position: relative;
`;

const overlayBackground = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 1.2, opacity: 0 },
};

const FormButton = styled.button`
  padding: 5px 10px;
  font-size: 1.3em;
  border-radius: 20% / 40%;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.pink.lighter};
  width: 80px;
`;

const Title = styled(MotionDiv)`
  font-size: 1.5em;
`;
const Error = styled(Div)`
  font-size: 1em;
  position: absolute;
  top: -20px;
`;

const LinkInput = styled(MotionInput)`
  margin: 20px 0px 25px 0px;
  border: 3px solid ${(props) => props.theme.pink.lighter};
`;

const DeleteDiv = styled(MotionDiv)`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.pink.lighter};
`;

function BookmarkForm({ number }: IProps) {
  const [isClicked, setIsClicked] = useRecoilState(bookmarkNumberState);
  const closeForm = () => {
    setIsClicked(0);
  };
  const bookmark = useRecoilValue(filterBookmark);
  const title = bookmark ? bookmark.title : "";
  const link = bookmark ? bookmark.link : "";

  const setBookmark = useSetRecoilState(bookmarkState);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>();

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
    <Overlay variants={overlay} initial="hidden" animate="visible" exit="exit">
      <OverlayBackground
        variants={overlayBackground}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ type: "spring", stiffness: 60 }}
      >
        <DeleteDiv
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={closeForm}
        >
          <DeleteIcon />
        </DeleteDiv>
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

          <MotionDiv
            style={{ marginTop: "20px" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FormButton type="submit">제출</FormButton>
          </MotionDiv>
        </Form>
      </OverlayBackground>
    </Overlay>
  );
}

export default BookmarkForm;
