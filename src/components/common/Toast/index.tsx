import { toast } from "react-toastify";
import * as S from "./style";
interface Props {
  message: string;
}

export default {
  success: (message: string) => toast(<Toast message={message} />),

  error: (message: string) => toast.error(<Toast message={message} />),
};

const Toast = (props: Props) => (
  <S.ToastWrapper>{props.message}</S.ToastWrapper>
);
