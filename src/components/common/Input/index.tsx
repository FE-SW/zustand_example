import React from 'react';

import theme from '@styles/theme';
import * as S from './style';

export interface Props {
  value?: string | number;
  placeHolder: string;
  backgroundColor?:string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function index({
  value,
  placeHolder,
  backgroundColor=theme.color.white,
  onChange,
}: Props) {
  return (
    <S.InputWrapper>
      <S.Input
        value={value}
        placeholder={placeHolder}
        backgroundColor={backgroundColor}
        onChange={onChange}
      />
    </S.InputWrapper>
  );
}

export default index;
