import {
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function TopBar() {
  return (
    <div className="bg-black text-gray-200 text-sm py-6 px-6 flex flex-col sm:flex-row justify-between items-center">
      {/* Left Side: Contact Info */}
      <div className="flex items-center flex-wrap justify-center sm:justify-start gap-6 text-base">
        <span className="flex items-center gap-2">
          <MdLocationOn className="text-green-400 text-xl" />
          19th Ave New York, NY 95822, USA
        </span>

        <span className="flex items-center gap-2">
          <FaPhoneAlt className="text-green-400 text-xl" />
          +1 916-85-2235
        </span>

        <span className="flex items-center gap-2">
          <MdEmail className="text-green-400 text-xl" />
          info@cryption.network
        </span>
      </div>

      {/* Right Side: Social Icons */}
      <div className="flex gap-5 mt-3 sm:mt-0 text-xl">
        <FaTwitter className="hover:text-green-400 cursor-pointer transition-colors duration-200" />
        <FaFacebookF className="hover:text-green-400 cursor-pointer transition-colors duration-200" />
        <FaLinkedinIn className="hover:text-green-400 cursor-pointer transition-colors duration-200" />
        <FaInstagram className="hover:text-green-400 cursor-pointer transition-colors duration-200" />
        <FaWhatsapp className="hover:text-green-400 cursor-pointer transition-colors duration-200" />
        <FaYoutube className="hover:text-green-400 cursor-pointer transition-colors duration-200" />
        <FaGoogle className="hover:text-green-400 cursor-pointer transition-colors duration-200" />
      </div>
    </div>
  );
}
