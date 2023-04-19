import { ToastContainer } from "react-toastify";
import styled from "styled-components";

import TodoRegistration from "@components/TodoRegistration";
import TodoSearch from "@components/TodoSearch";
import TodoList from "@components/TodoList";
import FinishedList from "@components/FinishedList";

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
          <TodoRegistration />
          <TodoSearch />
          <TodoList />
          <FinishedList/>
        </S.Wrapper>
      </S.Container>
    </>
  );
}

export default App;
