import Label from "@components/common/Label";

import { useTodoStore } from "@store/todo";

import { Todo } from "@type/todo";

import * as S from "./style";

function Index() {
  const { finishedList, searchWord } = useTodoStore();

  return (
    <S.Container>
      <Label marginBottom={15}>FINISHED LIST</Label>
      {finishedList.map((todo: Todo) => {
        if (todo.title.includes(searchWord)) {
          return (
            <S.ReviewBox key={todo.id}>
              <S.ReviewContent>
                <Label>{todo.title}</Label>
                <S.Text>{todo.comment}</S.Text>
              </S.ReviewContent>
            </S.ReviewBox>
          );
        }
      })}
    </S.Container>
  );
}

export default Index;