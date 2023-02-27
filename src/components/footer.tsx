import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <header className="flex fixed bottom-0 h-16 w-full justify-start px-4 items-center">
      <div className="text-slate-300 hover:text-sky-900 hover:cursor-pointer duration-300">
        <FaGithub size={30} />
      </div>
    </header>
  );
};

export default Footer;
