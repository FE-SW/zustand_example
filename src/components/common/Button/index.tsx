import React from "react";

import theme from "@styles/theme";
import * as S from "./style";

export interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  height?: number;
  fontSize?: number;
  fontWeight?: number;
  backgroundColor?: string;
  color?: string;
  borderRadious?: number;
  onClick?: (parameter?: any) => void;
}

function index({
  children,
  type = "button",
  height = 40,
  fontSize = 15,
  fontWeight = 600,
  backgroundColor = theme.color.blueBlack,
  color = theme.color.white,
  borderRadious = 4,
  onClick,
}: Props) {
  return (
    <S.Button
      onClick={onClick}
      type={type}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      backgroundColor={backgroundColor}
      color={color}
      borderRadious={borderRadious}
    >
      {children}
    </S.Button>
  );
}

export default index;
