import React from "react";
import Wipro from "../resources/wipro.png";
import Nlcindia from "../resources/nlcindia.png";

function experience() {
  return (
    <div id="experience">
      <div>
        <h3 className="text-3xl text-teal-600 text-center py-1">
          Work Experience
        </h3>
      </div>
      <div className="mt-5 lg:flex gap-10">
        <div className="text-center shadow-lg py-5 px-10 rounded-xl mb-10 hover:scale-110 transition-all flex-1">
          <center>
            <img className="r" src={Wipro} width={100} height={100} />
          </center>
          <h3 className="text-lg font-medium pt-8 pb-2  ">
            OSIsoft PI Developer, Wipro Limited, Bengaluru
            <p className="text-sm font-light">
                OSIsoft PI Data Historian, Tableau
            </p>
          </h3>
          <p className="py-2 text-[13px]">
            Built elements, created PI Tags, data cleaning and data validation
            for sustainability KPI of 3 affiliates in SABIC Corporation using
            the data historian software.
          </p>
          <p className="py-2 text-[13px]">
            Wrote optimized SQL queries to aid data migration from Microsoft SQL
            Server to OSIsoft PI Server.
          </p>
          <p className="py-2 text-[13px]">
            Collaborated with the Tableau team to visualise and draw insights
            from the processed data.
          </p>
          {/* <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p> */}
          {/* <div className="flex justify-center gap-4">
            <img className="r" src={Osisoftpi} width={70} height={100} />
            <img className="r" src={Tableau} width={100} height={100} />
          </div> */}
        </div>
        <div className="text-center shadow-lg py-5 px-10 rounded-xl mb-10 hover:scale-110 transition-all flex-1">
          <center>
            <img src={Nlcindia} width={85} height={100} />
          </center>
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            Software Developer Intern, NLC India Limited, Chennai
            <p className="text-sm font-light">
                HTML, Bootstrap, JQuery, JavaScript, PHP, MySQL
            </p>
          </h3>
          <p className="py-2 text-[13px]">
            Increased usability to 200% by developing a new full stack design of
            existing House Rent Allowance Claim System & Post-Retirement Medical
            Allowance Claim System web apps for company's HR Department using
            PHP.
          </p>
          <p className="py-2 text-[13px]">
            Implemented status tracking, performance reviews, generating reports
            and receipts, authentication using OTPs, creating and processing
            helpline requests.
          </p>
          {/* <div className="flex justify-center gap-4">
            <DiJqueryLogo className="text-[70px]" />
            <DiPhp className="text-[70px]" />
            <SiMysql className="text-[70px]" />
          </div> */}
          {/* <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p> */}
        </div>
      </div>
    </div>
  );
}

export default experience;
