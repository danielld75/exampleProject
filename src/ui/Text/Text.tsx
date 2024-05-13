import { ComponentProps } from "react";
import { cn } from "../../utils/cn.ts";

type TextProps = {
  children?: string;
  className?: string;
} & ComponentProps<"p">;
export const Text = ({ children, className }: TextProps) => {
  return <p className={cn(className)}>{children}</p>;
};
