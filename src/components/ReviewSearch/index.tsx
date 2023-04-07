/* eslint-disable react-hooks/rules-of-hooks */
import Input from "@components/common/Input";
import Label from "@components/common/Label";

import { useReviewStore } from "@store/review";

import * as S from "./style";

function index() {
  const { searchReview } = useReviewStore();

  return (
    <S.Container>
      <Label marginBottom={15}>리뷰 검색</Label>
      <Input
        placeHolder="영화 제목을 입력해 주세요"
        onChange={(e) => searchReview(e.target.value)}
      />
    </S.Container>
  );
}

export default index;
