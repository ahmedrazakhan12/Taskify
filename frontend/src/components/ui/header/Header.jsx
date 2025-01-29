import { User } from "lucide-react";

export default function Header({ username, email }) {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-purple-1 p-6 rounded-lg shadow-md mb-8">
      <div className="flex items-center space-x-4">
        <div className="bg-white p-2 rounded-full">
          <User className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">
            {username}'s Task Dashboard
          </h1>
          <p className="text-blue-100">{email}</p>
        </div>
      </div>
    </header>
  );
}
