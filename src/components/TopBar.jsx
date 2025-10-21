import {
  Phone,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
  Youtube,
  MapPin,
  Mail,
  Globe,
} from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-black text-gray-200 text-sm py-3 sm:py-6 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center flex-wrap z-50 relative">
      {/* Left Side: Contact Info */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs sm:text-base text-center sm:text-left">
        <span className="flex items-center gap-2">
          <MapPin className="text-green-400 w-5 h-5" />
          19th Ave New York, NY 95822, USA
        </span>

        <span className="flex items-center gap-2">
          <Phone className="text-green-400 w-5 h-5" />
          +1 916-85-2235
        </span>

        <span className="flex items-center gap-2">
          <Mail className="text-green-400 w-5 h-5" />
          info@cryption.network
        </span>
      </div>

      {/* Right Side: Social Icons */}
      <div className="flex gap-4 mt-3 sm:mt-0 text-lg justify-center sm:justify-end flex-wrap">
        <Twitter className="hover:text-green-400 cursor-pointer transition-colors duration-200 w-5 h-5" />
        <Facebook className="hover:text-green-400 cursor-pointer transition-colors duration-200 w-5 h-5" />
        <Linkedin className="hover:text-green-400 cursor-pointer transition-colors duration-200 w-5 h-5" />
        <Instagram className="hover:text-green-400 cursor-pointer transition-colors duration-200 w-5 h-5" />
        <MessageCircle className="hover:text-green-400 cursor-pointer transition-colors duration-200 w-5 h-5" /> {/* WhatsApp */}
        <Youtube className="hover:text-green-400 cursor-pointer transition-colors duration-200 w-5 h-5" />
        <Globe className="hover:text-green-400 cursor-pointer transition-colors duration-200 w-5 h-5" /> {/* Google */}
      </div>
    </div>
  );
}
