import Image from "next/image";
import badge from "../../assets/mg.jpeg";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 pt-6 px-6 md:px-24">
      <div className="container mx-auto  md:flex justify-between items-center">
        <div className="text-left">
          <div className="flex gap-2 items-center my-3">
            <Image
              className="rounded-full"
              height={50}
              width={50}
              src={badge}
              alt=""
            />
            <p>MobiTronics </p>
          </div>
          <p className="text-sm pb-3">&copy; 2024 All rights reserved.</p>
        </div>
        <div className="flex md:flex-col gap-1">
          <h1 className="text-xl">Useful Links</h1>
          <Link className="hover:text-red-400 hover:underline" href={"/brands"}>
            Brands
          </Link>
          <Link
            className="hover:text-red-400 hover:underline"
            href={"/aboutUs"}
          >
            About Us
          </Link>
          <Link
            className="hover:text-red-400 hover:underline"
            href={"/contactUs"}
          >
            Contact Us
          </Link>
          <Link className="hover:text-red-400 hover:underline" href={"/"}>
            Customer Care
          </Link>
        </div>
        <div>
          <div className="flex gap-6 text-3xl mb-4">
            <FaGithub />
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
          </div>
          <div className="text-center md:text-right">
            <ul className="flex justify-left md:justify-end space-x-4">
              <li>
                <a href="#" className="text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
