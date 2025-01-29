import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthLayout } from "./components/AuthLayout";
import NavigateBar from "../../components/ui/navigatebar/NavigateBar";
import { ROUTES } from "../../routes";
import ErrorMessage from "../../components/ui/ErrorMessage/ErrorMessage";
import { postRequest } from "../../helpers/Functions";
import InputField from "../../components/ui/input/Input";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await postRequest("auth/register", data);
      navigate(ROUTES.LOGIN);
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <AuthLayout title="Create a new account">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Username"
          id="username"
          type="text"
          autoComplete="username"
          register={register}
          errors={errors}
          validation={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          }}
        />
        <InputField
          label="Email address"
          id="email"
          type="email"
          autoComplete="email"
          register={register}
          errors={errors}
          validation={{
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          }}
        />
        <InputField
          label="Password"
          id="password"
          type="password"
          autoComplete="new-password"
          register={register}
          errors={errors}
          validation={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
        />
        {error && <ErrorMessage text={error} />}

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </form>

      <NavigateBar
        text="Already have an account?"
        route={ROUTES.LOGIN}
        linkText="← Back to log in"
      />
    </AuthLayout>
  );
};

export default Register;
