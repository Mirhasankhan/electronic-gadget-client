import Link from "next/link";
import { useState } from "react";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const email = true;

  return (
    <div className="relative">
      {email ? (
        <div>
          <div className="hidden md:flex flex-row items-center gap-3 cursor-pointer">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-transparent hover:bg-gray-600 flex items-center gap-1 rounded-lg"
            >
              <div className=" md:block">
                <h1>Hello, {email ? email.toString() : ""}</h1>
              </div>
            </div>
          </div>
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? "open" : "close"}
          </div>
        </div>
      ) : (
        <Link href="/login">
          <button className="text-white font-semibold bg-blue-600">
            Login
          </button>
        </Link>
      )}
      {isOpen && (
        <div className="absolute top-[44px] border md:top-[76px] right-0 bg-white p-2 md:p-6 rounded-b-md min-w-[250px]">
          <Link href="/" className="flex gap-2 items-center text-gray-700">
            <h1 className="hover:underline hover:text-red-500">
              Manage My Account
            </h1>
          </Link>
          <Link
            href={`/dashboard`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1"
          >
            <h1 className="hover:underline hover:text-red-500">Dashboard</h1>
          </Link>
          <Link
            href={`/`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1"
          >
            <h1 className="hover:underline hover:text-red-500">My Watchlist</h1>
          </Link>
          <Link
            href={`/supplies`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1 md:hidden"
          >
            <h1 className="hover:underline hover:text-red-500">All Supplies</h1>
          </Link>
          <Link
            href={`leaderboard`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1 md:hidden"
          >
            <h1 className="hover:underline hover:text-red-500">Leaderboard</h1>
          </Link>
          <Link
            href={`/`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1"
          >
            <h1 className="hover:underline hover:text-red-500">My Reviews</h1>
          </Link>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="flex gap-2 items-center text-gray-700 cursor-pointer"
          >
            <button className="hover:text-red-400 hover:underline">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
