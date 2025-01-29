import ErrorMessage from "../ErrorMessage/ErrorMessage";

const InputField = ({
  label,
  id,
  type,
  autoComplete,
  validation,
  register,
  errors,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300">
      {label}
    </label>
    <div className="mt-1">
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        {...register(id, validation)}
      />
      {errors[id] && <ErrorMessage text={errors[id].message} />}
    </div>
  </div>
);

export default InputField;
