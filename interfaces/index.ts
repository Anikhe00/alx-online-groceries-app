export interface inputFieldProps {
  title: string;
  placeholder?: string;
  value: string;
  onChangeText?: ((text: string) => void) | undefined;
}
