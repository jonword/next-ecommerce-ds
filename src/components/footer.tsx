import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex h-12 bg-slate-800 w-full justify-start px-4 items-center mt-[100px]">
      <div className="text-slate-300 hover:text-sky-700 hover:cursor-pointer duration-150">
        <a target="_blank" href="https://github.com/jonword/next-ecommerce-ds">
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
