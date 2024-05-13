import { type ComponentPropsWithRef, useId, forwardRef, type Ref } from "react";
import { FieldError } from "react-hook-form";
import { cn } from "../../utils/cn.ts";
type InputProps = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ label, error, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div className={"my-2"}>
        <label htmlFor={id} className={"mr-2"}>
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          {...rest}
          className={cn({
            "text-red-900 ring-red-300 placeholder:ring-red-700 focus:ring-red-700":
              error,
          })}
        />
        {error && <span className="text-red-700">{error.message}</span>}
      </div>
    );
  },
);
