import { ToastContainer } from "react-toastify";
import styled from "styled-components";

import ReviewRegistration from "@components/ReviewRegistration";
import ReviewSearch from "@components/ReviewSearch";
import ReviewHistory from "@components/ReviewHistory";

import "react-toastify/dist/ReactToastify.css";
import * as S from "./style";

const StyledToast = styled(ToastContainer).attrs({
  position: "top-center",
  autoClose: 2400,
  hideProgressBar: false,
  closeButton: false,
  pauseOnHover: true,
  theme: "dark",
})``;

function App() {
  return (
    <>
      <StyledToast />
      <S.Container>
        <S.Wrapper>
          <ReviewRegistration />
          <ReviewSearch />
          <ReviewHistory />
        </S.Wrapper>
      </S.Container>
    </>
  );
}

export default App;
