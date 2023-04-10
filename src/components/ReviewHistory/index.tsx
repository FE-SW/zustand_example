

import Label from "@components/common/Label";

import { useReviewStore } from "@store/review";

import { Review } from "@type/review";

import * as S from "./style";

function Index() {
  const { reviewList, searchWord } = useReviewStore();
  return (
    <S.Container>
      <Label marginBottom={15}>리뷰 내역</Label>
      {reviewList
        .sort((a, b) => {
          if (a.score === b.score) {
            // score 가 같은 경우
            if (/^[a-zA-Z]/.test(a.title) && /^[a-zA-Z]/.test(b.title)) {
              // title 이 모두 영어로 시작하는 경우
              if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
              if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            } else if (/^[a-z]/.test(a.title) && /^[A-Z]/.test(b.title)) {
              // a 가 영어 소문자, b 가 영어 대문자인 경우
              return 1;
            } else if (/^[A-Z]/.test(a.title) && /^[a-z]/.test(b.title)) {
              // a 가 영어 대문자, b 가 영어 소문자인 경우
              return -1;
            }
            // title 이 모두 한글인 경우
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
          }
          // score 가 다른 경우
          return b.score - a.score;
        })
        .map((review: Review) => {
          if (review.title.includes(searchWord)) {
            return (
              <S.ReviewBox key={review.id}>
                <S.ReviewContent>
                  <Label>{review.title}</Label>
                  <S.Text>{review.comment}</S.Text>
                  <S.StarWrap>
                    {[...new Array(review.score)].map((_, i) => (
                      <S.Star key={i}/>
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

export default Index;
