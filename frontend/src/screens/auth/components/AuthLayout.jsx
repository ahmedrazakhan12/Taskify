export function AuthLayout({ children, title }) {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="bg-[#fcfcfc0e] py-8 px-4 max-w-md shadow sm:rounded-lg sm:px-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-300 ">
            {title}
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
}
