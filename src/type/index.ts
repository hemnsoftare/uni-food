import { IconType } from "react-icons";

export interface InputProps {
  label: string;
  icon?: IconType; // Icon type from react-icons
  placeholder?: string;
  type?: string;
  value?: string;
  name: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface errorTypeCreateAccoount {
  username?: string;
  email?: string;
  password?: string;
  rePassword?: string;
}
