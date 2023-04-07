import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import { getLevel } from "@utils/sort";

import { Review } from "@type/review";


interface ReviewState {
  reviewList: Array<Review>;
  searchWord: string;
  addReview: (review: Review) => void;
  searchReview: (word: string) => void;
}

const initialData: Array<Review> = [
  {
    id: 0,
    title: "터미널",
    comment: "슬픈 영화인 줄 알았는데 코미디!",
    score: 4,
  },
  {
    id: 1,
    title: "사랑에 대한 모든 것",
    comment: "스티븐 호킹의 감동 실화ㅠㅠ",
    score: 5,
  },
  {
    id: 2,
    title: "터미네이터: 다크 페이트",
    comment: "내 취향은 아니었던 걸로...",
    score: 2,
  },
  {
    id: 3,
    title: "날씨의 아이",
    comment: "그럭저럭 볼만했던 영화 :)",
    score: 3,
  },
  {
    id: 4,
    title: "미나리",
    comment: "윤여정 선생님의 연기가 너무 멋졌다.",
    score: 5,
  },
];

export const useReviewStore = create<ReviewState>()(
  devtools(
    persist(
      (set) => ({
        reviewList: initialData,
        searchWord: "",
        addReview: (review: Review) => {
          set((state: ReviewState) => ({
            reviewList: [...state.reviewList, review].sort(
              (a: Review, b: Review) => {
                if (b.score !== a.score) return b.score - a.score;
                else {
                  const aLevel = getLevel(a.title);
                  const bLevel = getLevel(b.title);
                  if (aLevel === bLevel) {
                    return b.title.charCodeAt(0) - a.title.charCodeAt(0);
                  }
                  return aLevel - bLevel;
                }
              }
            ),
          }));
        },
        searchReview: (word: string) => {
          set({ searchWord: word });
        },
      }),
      {
        name: "reviewStore",
      }
    )
  )
);