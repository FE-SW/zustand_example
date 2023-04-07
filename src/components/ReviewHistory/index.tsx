/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";

import Label from "@components/common/Label";

import { useReviewStore } from "@store/review";

import { getLevel } from "@utils/sort";

import { Review } from "@type/review";

import * as S from "./style";

function index() {
  const { reviewList, searchWord } = useReviewStore();

  useEffect(() => {
    reviewList.sort((a: Review, b: Review) => {
      if (b.score !== a.score) return b.score - a.score;
      else {
        const aLevel = getLevel(a.title.charAt(0));
        const bLevel = getLevel(b.title.charAt(0));
        if (aLevel === bLevel) {
          return b.title.charCodeAt(0) - a.title.charCodeAt(0);
        }
        return aLevel - bLevel;
      }
    });
  }, [reviewList]);

  return (
    <S.Container>
      <Label marginBottom={15}>리뷰 내역</Label>
      {reviewList.map((review: Review) => {
        if (review.title.includes(searchWord)) {
          return (
            <S.ReviewBox>
              <S.ReviewContent>
                <Label>{review.title}</Label>
                <S.Text>{review.comment}</S.Text>
                <S.StarWrap>
                  {[...new Array(review.score)].map((_, i) => (
                    <S.Star />                
                  ))}
                </S.StarWrap>
              </S.ReviewContent>
            </S.ReviewBox>
          );
        }
      })}
    </S.Container>
  );
}

export default index;
