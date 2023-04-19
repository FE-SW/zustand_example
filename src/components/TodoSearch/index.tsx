import Input from "@components/common/Input";
import Label from "@components/common/Label";

import { useTodoStore } from "@store/todo";

import * as S from "./style";

function Index() {
  const { searchTodo } = useTodoStore();

  return (
    <S.Container>
      <Label marginBottom={15}>TODO 검색</Label>
      <Input
        placeHolder="제목을 입력해 주세요"
        onChange={(e) => searchTodo(e.target.value)}
      />
    </S.Container>
  );
}

export default Index;
