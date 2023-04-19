import styled from "styled-components";

export interface Props {
  children: string;
  type?: "button" | "submit" | "reset";
  height?: number;
  backgroundColor?: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  borderRadious?: number;
  disabled?: boolean;
  onClick?: (parameter?: any) => void;
}

export const Button = styled.button<Omit<Props, "children">>`
  width: 100%;
  height: ${({ height }) => height}px;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border-radius: ${({ borderRadious }) => borderRadious}px;
  border:none;
  `
;
