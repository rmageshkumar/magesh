import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        {/* <img src={logo} width={200} className="my-20" /> */}
        <Logo width={350} className="h-10 w-auto" />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-gray-800"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy; {new Date().getFullYear()} Technoread. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
