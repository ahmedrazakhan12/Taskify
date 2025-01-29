import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthLayout } from "./components/AuthLayout";
import ErrorMessage from "../../components/ui/ErrorMessage/ErrorMessage";
import { postRequest } from "../../helpers/Functions";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import NavigateBar from "../../components/ui/navigatebar/NavigateBar";
import { localStorageKeys, saveItemToLocalStorage } from "../../helpers/Index";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await postRequest("auth/login", data, false);
      console.log("Login successful", response.data);
      saveItemToLocalStorage(localStorageKeys.authToken, response.data.token);
      saveItemToLocalStorage(localStorageKeys.authUser, response.data.user);
      navigate(ROUTES.TASK_DASHBOARD);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <AuthLayout title="Sign in to your account">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <ErrorMessage text={errors.email.message} />}
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && <ErrorMessage text={errors.password.message} />}
          </div>
        </div>
        {error && <ErrorMessage text={error} />}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
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
