import { ChangeEvent, FocusEvent } from 'react';

export interface IInput {
  name: string;
  id: string;
  labelText?: string;
  touched?: boolean;
  errors?: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  value?: string;
}
