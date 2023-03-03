import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex fixed bottom-0 h-16 w-full justify-start px-4 items-center">
      <div className="text-slate-300 hover:text-sky-900 hover:cursor-pointer duration-300">
        <a target="_blank" href="https://github.com/jonword/next-ecommerce-ds">
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
