import theme from "@styles/theme";
import styled from "styled-components";

export interface Props {
  value?: string | number;
  placeHolder?: string;
  backgroundColor?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputWrapper = styled.div`
  width: 100%;
`;

export const Input = styled.input<Props>`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: ${theme.color.black};
  box-sizing: border-box;
  font-weight: 600;
  &:focus {
    background-color: ${theme.color.white};
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
