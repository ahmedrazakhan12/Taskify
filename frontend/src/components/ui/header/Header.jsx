import { User } from "lucide-react";

export default function Header({ username, email }) {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-purple-700 p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8">
      <div className="flex flex-wrap items-center gap-4">
        <div className="bg-white p-2 rounded-full">
          <User className="w-6 h-6 text-blue-600" />
        </div>
        <div className="min-w-0">
          <h1 className="text-[12px] md:text-lg lg:text-2xl font-bold text-white truncate">
            {username}'s Task Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 truncate">{email}</p>
        </div>
      </div>
    </header>
  );
}
