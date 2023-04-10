import { useState } from "react";

import Label from "@components/common/Label";
import Input from "@components/common/Input";
import Select from "@components/common/Select";
import Button from "@components/common/Button";
import Toast from "@components/common/Toast";
import { Option } from "@components/common/Select";

import { useReviewStore } from "@store/review";

import { Review } from "@type/review";

import * as S from "./style";

const ReviewStarList: Array<Option> = [
  {
    value: 5,
    label: "5점",
  },
  {
    value: 4,
    label: "4점",
  },
  {
    value: 3,
    label: "3점",
  },
  {
    value: 2,
    label: "2점",
  },
  {
    value: 1,
    label: "1점",
  },
];

function Index() {
  const { addReview, reviewList } = useReviewStore();
  const [reviewStar, setReviewStar] = useState<Option>(ReviewStarList[0]);
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const handleAddReview = () => {
    const newReviewId =
      Math.max(...reviewList.map((review: Review) => review.id)) + 1;

    const newReview = {
      id: newReviewId,
      title: title,
      comment: comment,
      score: reviewStar.value,
    };

    Toast.success("리뷰등록이 성공했습니다");
    addReview(newReview);
    setTitle("");
    setComment("");
    setReviewStar(ReviewStarList[0]);
  };

  return (
    <S.Container>
      <Label marginBottom={15}>신규 리뷰 등록</Label>
      <S.ElementWrap>
        <Label fontSize={14} fontWeight={500}>
          영화 제목
        </Label>
        <Input
          value={title}
          placeHolder="제목을 입력해 주세요"
          onChange={(e) => setTitle(e.target.value)}
        />
      </S.ElementWrap>
      <S.ElementWrap>
        <Label fontSize={14} fontWeight={500}>
          한줄평
        </Label>
        <Input
          value={comment}
          placeHolder="내용을 입력해 주세요"
          onChange={(e) => setComment(e.target.value)}
        />
      </S.ElementWrap>
      <S.ElementWrap>
        <Label fontSize={14} fontWeight={500}>
          별점
        </Label>
        <Select
          value={reviewStar}
          options={ReviewStarList}
          onChange={(option: Option) => {
            setReviewStar(option);
          }}
        />
      </S.ElementWrap>
      <S.ButtonWrapper>
        <Button height={46} onClick={handleAddReview}>
          등록
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}

export default Index;
