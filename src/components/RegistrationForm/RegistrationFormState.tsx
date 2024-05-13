import { Button } from "../../ui";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

type RegistrationFormData = {
  email: string;
  password: string;
  language: string;
};
export const RegistrationFormState = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    email: "",
    password: "",
    language: "",
  });
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  const { email, password, language } = formData;
  return (
    <>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Language: {language}</p>

      <form onSubmit={handleSubmit}>
        <div className={"my-2"}>
          <label htmlFor="email" className={"mr-2"}>
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            value={email}
            placeholder={"email@example.com"}
          />
        </div>
        <div className={"my-2"}>
          <label htmlFor="password" className={"mr-2"}>
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className={"my-2"}>
          <label htmlFor="language" className={"mr-2"}>
            Language
          </label>
          <input
            type="text"
            id="language"
            onChange={handleChange}
            value={language}
          />
        </div>
        <Button label={"Send"} type={"submit"} />
      </form>
    </>
  );
};
