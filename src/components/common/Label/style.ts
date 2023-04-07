import styled from "styled-components";

interface Props {
  children: React.ReactNode | string;
  fontSize?: number;
  fontWeight?: number;
  marginBottom?:number;
}

export const Label = styled.div<Props>`
  width: 100%;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;
