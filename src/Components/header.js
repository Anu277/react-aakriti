import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import "./header.css";
import connector from "../imgs/connect-o.svg"

import Aakriti from "../imgs/aakriti-logo.webp";

const Header = () => {

  useEffect(()=>{
    AOS.init({duration:1200});
  });

  return (
    <div className="container mx-auto  header p-5 pb-0 md:p-10 md:pb-0" id="header-first">
      <div className="logo-section">
        <img
          src={Aakriti}
          className="w-40 md:w-70 lg:w-96 Aakriti-logo animate-levitate"
          alt="Aakriti Logo"
          data-aos="fade-up"
        />
      </div>
      <div className="relative header-flex  flex flex-row">
        <div className="ver-bar absolute flex flex-col h-full w-auto md:w-auto  z-10">
            <section className="connect-bar m-auto my-0 w-full ">
              <img src={connector} className="connector-img w-1/2 md:w-auto " alt="connector" data-aos="fade"></img>
            </section>
            <section className="verti-bar-box h-full flex md:justify-center justify-left pl-5px md:p-0 al">
              <div className="verti-bar relative"></div>
            </section>
        </div>
        <div className="header-matter container text-right mt-48 md:mt-20 pb-20 z-20" data-aos="fade-left">
          <h1 className="text-5xl  md:text-7xl xl:text-9xl">
            <b>
              {" "}
              AAKRITI <br />
              2024{" "}
            </b>
          </h1>
          <h2 className="header-1-h2 my-6 text-white font-black tracking-wider md:text-xl xl:text-2xl">
            DEPARTMENT OF CSE <br /> ( ARTIFICIAL INTELLIGENCE <br></br> AND<br></br> MACHINE
            LEARNING )
          </h2>
          <h2 className="text-xl md:text-3xl text-center  bg-gradient-to-r from-[#00B4DB]  to-[#78ffd6] inline-block text-transparent bg-clip-text ">
            <b>JNTUHUCEM </b>
          </h2>
          <h2 className="text-xl md:tetx-2xl xl:text-3xl text-white"><i class="fa-solid fa-calendar-days px-2"></i> JUNE 11TH & 12TH</h2>
        </div>
      </div>
      
    </div>
  );
};
export default Header;
