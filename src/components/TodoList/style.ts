import theme from "@styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 400px);
  padding: 20px 20px 20px 20px;
  background-color: ${theme.color.backGray};
`;

export const ReviewBox = styled.div`
  display: flex;
  flex-direction: column; 
  padding: 40px 20px;
  border: 1px solid ${theme.color.borderGray};
  background-color: ${theme.color.white};
  border-radius: 10px;
`;

export const ReviewContent = styled.div`
  font-weight: 500;
`;

export const Text = styled.div`
  margin-bottom: 15px;
`;

export const Star = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${theme.color.yellow};
  border-color: ${theme.color.yellow};
  border-radius: 100%;
  margin-right: 4px;
`;

export const StarWrap = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 150px;
`;

export const Padding = styled.div`
  padding: 0 2px;
`