import { Input } from "@/06_shared/ui/Input";
import { Button } from "@/06_shared/ui/Button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import type { UserFormValues } from "../model/types";

interface UserFormProps {
  initialValues?: UserFormValues;
  onSubmit: (data: UserFormValues) => void;
  submitText?: string;
}

export const UserForm = ({
  initialValues,
  onSubmit,
  submitText = "Сохранить",
}: UserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormValues>({
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (initialValues) reset(initialValues);
  }, [initialValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          placeholder="Имя"
          {...register("username", { required: "Обязательное поле" })}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>
      <div>
        <Input placeholder="Сайт" {...register("website")} />
        {errors.website && <span>{errors.website.message}</span>}
      </div>
      <div>
        <Input placeholder="Город" {...register("city")} />
        {errors.city && <span>{errors.city.message}</span>}
      </div>
      <Button type="submit">{submitText}</Button>
    </form>
  );
};
