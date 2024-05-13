import { ComponentProps } from "react";

type HeaderProps = {
  children?: string;
} & ComponentProps<"h1">;

export const Header = ({}: HeaderProps) => {
  return <h1 className={"text-3xl text-center text-blue-700"}>Header</h1>;
};
