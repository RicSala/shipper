import { ChangeEvent, FunctionComponent } from "react";

type InputType = "text" | "checkbox" | "email" | "date" | "password";

interface Props {
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: InputType;
  label?: string;
}

export const AnotherThing: FunctionComponent<Props>;
export const YetAnotherThing: FunctionComponent<Props>;
export const Testing: FunctionComponent<Props>;
