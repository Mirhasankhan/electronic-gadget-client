import Link from "next/link";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <HiOutlineMenuAlt3 /> : <IoMdCloseCircleOutline />}
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-[40px] border md:top-[76px] right-0 bg-white p-2 md:p-6 rounded-b-md min-w-[250px]">
          <Link
            href="/products"
            className="flex gap-2 items-center text-gray-700"
          >
            <h1 className="hover:underline hover:text-red-500">All Products</h1>
          </Link>
          <Link
            href={`/contactUs`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1"
          >
            <h1 className="hover:underline hover:text-red-500">Contact Us</h1>
          </Link>
          <Link
            href={`/brands`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1"
          >
            <h1 className="hover:underline hover:text-red-500">Brands</h1>
          </Link>
          <Link
            href={`/flash-sale`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1"
          >
            <h1 className="hover:underline hover:text-red-500">Flash Sale</h1>
          </Link>
          <Link
            href={`/aboutUs`}
            className="flex gap-2 items-center text-gray-700 md:my-3 my-1 md:hidden"
          >
            <h1 className="hover:underline hover:text-red-500">About Us</h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
