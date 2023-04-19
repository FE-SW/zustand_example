import Button from "@components/common/Button";
import Label from "@components/common/Label";
import Toast from "@components/common/Toast";

import { useTodoStore } from "@store/todo";

import { Todo } from "@type/todo";

import theme from "@styles/theme";
import * as S from "./style";

function Index() {
  const { todoList, searchWord, removeTodo, finishTodo } = useTodoStore();

  return (
    <S.Container>
      <Label marginBottom={15}>TODO LIST</Label>
      {todoList.map((todo: Todo) => {
        if (todo.title.includes(searchWord)) {
          return (
            <S.ReviewBox key={todo.id}>
              <S.ReviewContent>
                <Label>{todo.title}</Label>
                <S.Text>{todo.comment}</S.Text>
              </S.ReviewContent>
              <S.ButtonWrapper>
                <Button
                  height={30}
                  backgroundColor={theme.color.red}
                  onClick={() => {
                    removeTodo(todo);
                    Toast.success("TODO삭제가 성공했습니다");
                  }}
                >
                  삭제
                </Button>
                <S.Padding />
                <Button
                  height={30}
                  backgroundColor={theme.color.green}
                  onClick={() => {
                    finishTodo(todo);
                    Toast.success("TODO완료가 성공했습니다");
                  }}
                >
                  완료
                </Button>
              </S.ButtonWrapper>
            </S.ReviewBox>
          );
        }
      })}
    </S.Container>
  );
}

export default Index;
