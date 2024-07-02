"use client";
import Input from "@/app/_components/Input/input.component";
import styles from "./register.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Button from "@/app/_components/Button/button.component";
import { useRouter } from "@/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const registerFormValidator = yup
    .object()
    .shape({
      firstName: yup.string().required("Имя обязательно для заполнения"),
      lastName: yup.string().required("Фамилия обязательна для заполнения"),
      email: yup
        .string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Неправильный формат")
        .required("Email обязателен для заполнения"),
      password: yup
        .string()
        .min(8, "Пароль должен содержать минимум 8 символов")
        .required("Пароль обязателен для заполнения"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Пароли должны совпадать"),
    })
    .required();
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitSuccessful },
  }: any = useForm<any>({
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerFormValidator),
  });

  const onSubmit = handleSubmit(async (data: any) => {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    console.log(payload);
  });
  return (
    <div className={styles["container"]}>
      <div className={styles["container-card"]}>
        <span className={styles["container-card-title"]}>Регистрация</span>
        <form className={styles["container-card-form"]} onSubmit={onSubmit}>
          <div>
            <Input
              register={register}
              errors={errors}
              label="Имя"
              type="text"
              name="firstName"
              placeholder="Введите ваше имя"
            />
          </div>
          <div>
            <Input
              register={register}
              errors={errors}
              label="Фамилия"
              type="text"
              name="lastName"
              placeholder="Введите вашу фамилию"
            />
          </div>
          <div>
            <Input
              register={register}
              errors={errors}
              label="Email"
              type="text"
              name="email"
              placeholder="Введите ваш email"
            />
          </div>
          <div>
            <Input
              register={register}
              errors={errors}
              label="Пароль"
              type="password"
              name="password"
              placeholder="Введите ваш пароль"
            />
          </div>
          <div>
            <Input
              register={register}
              errors={errors}
              label="Подтвердите пароль"
              type="password"
              name="confirmPassword"
              placeholder="Подтвердите ваш пароль"
            />
          </div>
          <div>
            <Button type="submit" disabled={errors.length > 0}>
              <span>Зарегистрироваться</span>
            </Button>
          </div>
        </form>
        <div className={styles["container-card-no-account"]}>
          <span>Уже есть аккаунт?</span>
          <div
            onClick={() => {
              router.push("/auth");
            }}
            className={styles["container-card-no-account-link"]}
          >
            Войти
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
