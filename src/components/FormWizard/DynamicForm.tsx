import { useState, ChangeEvent } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  hobbies: z.array(z.string()),
});

type FormData = z.infer<typeof formSchema>;

export const DynamicForm = () => {
  const { handleSubmit, control } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "hobbies",
  });
  const [data, setData] = useState<FormData | null>(null);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              field.onChange(e);
            }}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              field.onChange(e);
            }}
          />
        )}
      />
      {fields.map((item, index) => (
        <div key={item.id}>
          <Controller
            control={control}
            name={`hobbies[${index}]`}
            render={({ field }) => <input {...field} />}
          />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={() => append("")}>
        Add
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};
