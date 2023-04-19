import { useState } from "react";

import Label from "@components/common/Label";
import Input from "@components/common/Input";
import Button from "@components/common/Button";
import Toast from "@components/common/Toast";

import { useTodoStore } from "@store/todo";

import { Todo } from "@type/todo";

import * as S from "./style";

function Index() {
  const { addTodo, todoList } = useTodoStore();
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const handleAddTodo = () => {
    if (title === "") {
      Toast.error("제목을 입력해주세요");
      return;
    }
    if (comment === "") {
      Toast.error("내용을 입력해주세요");
      return;
    }

    const newTodoId = Math.max(...todoList.map((todo: Todo) => todo.id)) + 1;

    const newTodo = {
      id: newTodoId,
      title: title,
      comment: comment,
    };

    Toast.success("TODO등록이 성공했습니다");
    addTodo(newTodo);
    setTitle("");
    setComment("");
  };

  return (
    <S.Container>
      <Label marginBottom={15}>TODO 등록</Label>
      <S.ElementWrap>
        <Label fontSize={14} fontWeight={500}>
          제목
        </Label>
        <Input
          value={title}
          placeHolder="제목을 입력해 주세요"
          onChange={(e) => setTitle(e.target.value)}
        />
      </S.ElementWrap>
      <S.ElementWrap>
        <Label fontSize={14} fontWeight={500}>
          내용
        </Label>
        <Input
          value={comment}
          placeHolder="내용을 입력해 주세요"
          onChange={(e) => setComment(e.target.value)}
        />
      </S.ElementWrap>
      <S.ButtonWrapper>
        <Button height={46} onClick={handleAddTodo}>
          추가하기
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}

export default Index;
