import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Contract = () => {
  return (
    <>
      <div className="container contract" id="contract">
        <h1>CONTRACT</h1>
        <div className="contract-icons" data-aos="zoom-in-up"
     data-aos-duration='1000'>
          <a
            href="https://www.linkedin.com/in/neeraj-harikesh-vishwakarma-816168222/"
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://github.com/neeraj-vish?tab=repositories"
            target="_blank"
            className="items"
          >
            <FaGithub className="icons" />
          </a>
          <a
            href="mailto:nv4866594@gmail.com"
            target="_blank"
            className="items"
          >
            <MdEmail className="icons" />
          </a>
          <a href="tel:+919146484614" target="_blank" className="items">
            <IoIosCall className="icons" />
          </a>
          <a
            href="https://wa.me/919146484614"
            target="_blank"
            className="items"
          >
            <FaWhatsapp className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contract;
