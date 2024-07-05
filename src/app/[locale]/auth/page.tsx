"use client";
import Input from "@/app/_components/Input/input.component";
import styles from "./auth.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Button from "@/app/_components/Button/button.component";
import { useRouter } from "@/navigation";
import { useAppDispatch } from "@/app/_store/hooks";
import { setIsLoading } from "@/app/_store/loader-slice";

const AuthPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const loginFormValidator = yup
    .object()
    .shape({
      email: yup
        .string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Неправильный формат")
        .required("Email обязателен для заполнения"),
      password: yup
        .string()
        .min(8, "Пароль должен содержать минимум 8 символов")
        .required("Пароль обязателен для заполнения"),
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
      email: "",
      password: "",
    },
    resolver: yupResolver(loginFormValidator),
  });

  const onSubmit = handleSubmit(async (data: any) => {
    dispatch(setIsLoading(true));
    const payload = {
      email: data.email,
      password: data.password,
    };
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 700);
    router.push("/portal/schedule");
  });
  return (
    <div className={styles["container"]}>
      <div className={styles["container-card"]}>
        <span className={styles["container-card-title"]}>Войти</span>
        <form className={styles["container-card-form"]} onSubmit={onSubmit}>
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
            <Button type="submit" disabled={errors.length > 0}>
              <span>Войти</span>
            </Button>
          </div>
        </form>
        <div className={styles["container-card-no-account"]}>
          <span>Нет аккаунта?</span>
          <div
            onClick={() => {
              router.push("/register");
            }}
            className={styles["container-card-no-account-link"]}
          >
            Зарегистрироваться
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
