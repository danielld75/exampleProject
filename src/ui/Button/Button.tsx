import { ComponentProps } from "react";
import { cn } from "../../utils/cn.ts";

type ButtonProps = {
  label: string;
} & ComponentProps<"button">;

export const Button = ({ label, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={cn("text-white rounded rounded-xl py-4 px-6", className)}
      {...rest}
    >
      {label}
    </button>
  );
};
