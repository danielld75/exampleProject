import { Button } from "../../ui";
import { FormEventHandler, useEffect, useRef } from "react";
import { Input } from "../../ui";

type RegistrationFormData = {
  email: string;
  password: string;
  language: string;
};
export const RegistrationFormRefs = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const data: RegistrationFormData = {
      email: emailFieldRef.current!.value,
      password: passwordFieldRef.current!.value,
      language: languageFieldRef.current?.value || "",
    };
    console.log(data);
  };
  useEffect(() => {
    if (emailFieldRef.current) {
      emailFieldRef.current.focus();
    }
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input label={"E-mail"} ref={emailFieldRef} type={"email"} />
        <Input label={"Password"} ref={passwordFieldRef} type={"password"} />
        <Input label={"Language"} ref={languageFieldRef} />
        <Button label={"Send"} type={"submit"} />
      </form>
    </>
  );
};
