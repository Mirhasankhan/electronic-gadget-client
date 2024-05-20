"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/mg.jpeg";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  return (
    <div className="">
      <nav className="text-white sticky top-0 flex z-10 justify-between md:px-8 px-2 h-16  md:h-24 w-full items-center bg-black bg-opacity-60">
        <Link className="text-2xl md:text-4xl flex items-center gap-2" href="/">
          <div>
            <Image
              height={50}
              width={50}
              className="h-8 w-8  md:h-16 md:w-16  rounded-full"
              src={logo}
              alt=""
            />
          </div>
          <h1 className="text-2xl text-yellow-400">MobiTronics</h1>
        </Link>
        <div className="md:flex gap-4 hidden">
          <Link
            href="/"
            className="hover:bg-gray-500 p-2 rounded-md font-semibold"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="hover:bg-gray-500 p-2 rounded-md font-semibold"
          >
            All Products
          </Link>

          <Link
            href="/contactUs"
            className="hover:bg-gray-500 p-2 rounded-md font-semibold"
          >
            Contact us
          </Link>
          <Link
            href="/brands"
            className="hover:bg-gray-500 p-2 rounded-md font-semibold"
          >
            Brands
          </Link>
          <Link
            href="/flash-sale"
            className="hover:bg-gray-500 p-2 rounded-md font-semibold"
          >
            Flash Sale
          </Link>
          <Link
            href="/aboutUs"
            className="hover:bg-gray-500 p-2 rounded-md font-semibold"
          >
            About Us
          </Link>
        </div>
        <div className="md:hidden">
          <MenuDropdown></MenuDropdown>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
