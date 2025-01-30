import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthLayout } from "./components/AuthLayout";
import ErrorMessage from "../../components/ui/errormessage/ErrorMessage";
import { postRequest } from "../../helpers/Functions";
import { ROUTES } from "../../routes";
import NavigateBar from "../../components/ui/navigatebar/NavigateBar";
import {
  localStorageKeys,
  saveItemToLocalStorage,
  saveJsonItemToLocalStorage,
} from "../../helpers/Index";
import toast from "react-hot-toast";
import Button from "../../components/ui/button/Button";
import InputField from "../../components/ui/input/Input";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await postRequest("auth/login", data, false);
      saveItemToLocalStorage(localStorageKeys.authToken, response.data.token);
      saveJsonItemToLocalStorage(localStorageKeys.authUser, response.data.user);
      setLoading(false);
      toast.success("Login successful !");
      window.location.href = ROUTES.TASK_DASHBOARD;
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <AuthLayout title="Sign in to your account">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="mt-1">
            <InputField
              label="Email address"
              id="email"
              type="email"
              autoComplete="email"
              register={register}
              validation={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              }}
            />
            {errors.email && <ErrorMessage text={errors.email.message} />}
          </div>
        </div>
        <div>
          <div className="mt-1">
            <InputField
              label="Password"
              id="password"
              type="password"
              autoComplete="new-password"
              register={register}
              validation={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
            />

            {errors.password && <ErrorMessage text={errors.password.message} />}
          </div>
        </div>
        {error && <ErrorMessage text={error} />}
        <div>
          <Button
            label={"Sign In"}
            type="submit"
            className="justify-center rounded-lg bg-purple-2"
            loading={loading}
          />
        </div>
        <NavigateBar
          text="Don't have an account?"
          route={ROUTES.REGISTER}
          linkText="← Go to sign up"
        />
      </form>
    </AuthLayout>
  );
};

export default Login;
