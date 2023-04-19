import React from "react";

import * as S from "./style";

interface Props {
  children?: React.ReactNode
  fontSize?: number;
  fontWeight?: number;
  marginBottom?: number;
}

function index({
  children,
  fontSize = 18,
  fontWeight = 800,
  marginBottom = 5,
}: Props) {
  return (
    <S.Label
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginBottom={marginBottom}
    >
      {children}
    </S.Label>
  );
}

export default index;
