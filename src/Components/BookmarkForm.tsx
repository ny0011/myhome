import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { bookmarkNumberState, bookmarkState, filterBookmark } from "../atoms";
import {
  BookmarkFormButton,
  BookmarkFormCloseContainer,
  BookmarkFormError,
  BookmarkFormInput,
  BookmarkFormContainer,
  BookmarkFormOverlay,
  BookmarkFormTitle,
  BookmarkFormErrorContainer,
} from "../Styles/BookmarkUI";
import { DeleteIcon } from "../Styles/Icons";
import MotionDiv from "../Styles/Motions";
import { Form } from "../Styles/Tags";

interface IForm {
  name: string;
  url: string;
}

interface IProps {
  number?: number;
}
const background = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const overlay = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 1.2, opacity: 0 },
};

function BookmarkForm({ number }: IProps) {
  const setIsClicked = useSetRecoilState(bookmarkNumberState);
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
  console.log(errors);

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
    <BookmarkFormContainer
      variants={background}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <BookmarkFormOverlay
        variants={overlay}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ type: "spring", stiffness: 60 }}
      >
        <BookmarkFormCloseContainer
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={closeForm}
        >
          <DeleteIcon />
        </BookmarkFormCloseContainer>
        <Form
          onSubmit={handleSubmit(searchKeyword)}
          style={{ flexDirection: "column" }}
        >
          <BookmarkFormTitle>링크 이름</BookmarkFormTitle>
          <BookmarkFormInput
            defaultValue={title}
            {...register("name", { required: true, maxLength: 10 })}
          ></BookmarkFormInput>
          <BookmarkFormErrorContainer>
            {errors.name && errors.name.type === "maxLength" ? (
              <BookmarkFormError>10자 이내로 적어주세요</BookmarkFormError>
            ) : null}
          </BookmarkFormErrorContainer>
          <BookmarkFormTitle>링크 주소</BookmarkFormTitle>
          <BookmarkFormInput
            defaultValue={link}
            {...register("url", { required: true })}
          ></BookmarkFormInput>

          <MotionDiv
            style={{ marginTop: "20px" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <BookmarkFormButton type="submit">제출</BookmarkFormButton>
          </MotionDiv>
        </Form>
      </BookmarkFormOverlay>
    </BookmarkFormContainer>
  );
}

export default BookmarkForm;
