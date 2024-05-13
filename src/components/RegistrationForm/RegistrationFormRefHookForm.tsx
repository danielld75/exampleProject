import { Button } from "../../ui";
import { Input } from "../../ui";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type RegistrationFormData, validationSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegistrationFormRefsHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(validationSchema),
  });

  const watchedFields = {
    email: watch("email"),
    password: watch("password"),
    language: watch("language"),
  };
  console.log(watchedFields);
  const handleRegistrationForm: SubmitHandler<RegistrationFormData> = (
    data,
  ) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleRegistrationForm)}>
        <p>{watchedFields.email}</p>
        <Input
          label="E-mail"
          {...register("email")}
          type="email"
          error={errors.email}
        />
        <Input
          label="Password"
          {...register("password")}
          type="password"
          error={errors.password}
        />
        <Input
          label="Language"
          {...register("language")}
          error={errors.language}
        />
        <Button label="Send" type="submit" />
      </form>
    </>
  );
};
