import { SubmitHandler, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { bookmarkState } from "../atoms";
import { Form, Input } from "../Styles/Tags";

interface IForm {
  name: string;
  url: string;
}

interface IProps {
  number: number;
}

function BookmarkForm({ number }: IProps) {
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
      return bookmarks.map((bookmark) => {
        if (bookmark.id !== number) {
          return bookmark;
        }
        return { id: number, title: name, link: url };
      });
    });
    reset({ name: "", url: "" });
  };
  return (
    <Form
      onSubmit={handleSubmit(searchKeyword)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Input {...register("name", { required: true, maxLength: 10 })}></Input>
      {errors.name && <span>10자 이내로 적어주세요</span>}
      <Input {...register("url", { required: true })}></Input>

      <input type="submit" />
    </Form>
  );
}

export default BookmarkForm;
