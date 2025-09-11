import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Image1 from '../../assets/alec-img/download.png'

const ExcelHeader = () => {
  return (
    <div style={{ backgroundColor:"#F0F8FF" }}>
      <div  className="w-full shadow-md container">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left logo */}
        <div style={{ alignItems:"center", display:"flex" }} className="flex ">
          <img style={{ height:"100px" }} height={100}
            src={Image1} // Replace with actual path
            alt="Unique Engineering Logo"
            className="w-32 md:w-40"
          />
          <div className="text-center md:text-left">
            <h1 style={{ color:"#1D4577" }} className="text-2xl md:text-3xl font-bold text-blue-900">
              UNIQUE ENGINEERING AND ASSOCIATE
            </h1>



          </div>
        </div>

        {/* Right side text */}
        <div className=" md:text-right mt-4 md:mt-0">

            <div className="d-flex justify-content-between text-left">
            <div>
            <p style={{ color:"#1D4577" }}  className="text-blue-800 mb-1 font-semibold font-boldi">
              CHARTED ENGINEER AND APPROVED VALUER
            </p>
            <p className="text-sm text-gray-800 mb-1">
              Reg. AMIE- AM167147-5, IMC- 82-16, IIOV- CAT-I/A-4537,
            </p>
            <a style={{ color:"blue" }} href="http://www.ueaa.co.in" className="text-sky-600 text-sm block">
              www.ueaa.co.in
            </a><br />
            <a style={{ color:"blue" }} href="mailto:bhartsharma1@gmail.com" className="text-sky-600 text-sm">
              bhartsharma1@gmail.com
            </a>
            </div>


            <div>
          <p className="text-sm md:text-base font-semibold text-black">
            CONSULTING ENGINEER VALUERS,<br />
            ARCHITECTS AND DESIGNER WORK,<br />
            REGISTERED ENGINEER WITH IMC AND T&CP
          </p>

          </div>
            </div>



        </div>
      </div>

      {/* Address */}
<div style={{ display:"flex", alignItems:"center", justifyContent:"space-between"}}>

      <div className=" text-sm mt-4 text-black">
        REG. OFFICE - OFFICE NO. 102, SWADESH BHAWAN PLOT NO. 2 PRESS COMPLEX
        A.B ROAD INDORE. 452001 M.P
      </div>
      <div className="flex  gap-2 mt-2">
            <FaPhoneAlt className="text-black" />
            <span className="font-semibold text-black">BHART SHARMA</span> <br />
            <span className="text-black">+919993970499</span>
            </div>
</div>

    </div>
    </div>

  );
};

export default ExcelHeader;
