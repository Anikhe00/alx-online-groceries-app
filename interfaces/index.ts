import { ReactNode } from "react";

export interface InputFieldProps {
  title: string;
  placeholder?: string;
  value: string;
  onChangeText?: ((text: string) => void) | undefined;
}

export interface ButtonProps {
  title?: string;
  onPress?: () => void;
  children: ReactNode;
}
