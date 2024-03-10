import React from "react";
import Wipro from "../resources/wipro.png";
import Nlcindia from "../resources/nlcindia.png";
import Iquadra from "../resources/iquadra.png";

function experience() {
  return (
    <div id="experience">
      <div>
        <h3 className="text-3xl text-teal-600 text-center py-1">
          Work Experience
        </h3>
      </div>
      <div className="text-center shadow-lg py-5 px-10 rounded-xl mb-10 hover:scale-110 transition-all flex-1">
        <center>
          <img src={Iquadra} width={85} height={100} alt="iquadra logo" />
        </center>
        <h3 className="text-lg font-medium pt-8 pb-2 ">
          Full Stack Developer, iQuadra Information Services.
          Atlanta
          <p className="text-sm font-light">
            Python, Java, Javascript, HTML, CSS, Tailwind, React, Redux, NodeJS, AWS(Lambda,
            API Gateway, PostgreSQL)
          </p>
        </h3>
        <p className="py-2 text-[13px]">
          Engineered serverless Manufacturing Queue web apps, allowing Bernard Group’s warehouse coordinators to monitor jobs &
          track the status of orders
        </p>
        <p className="py-2 text-[13px]">
          Architected AWS CloudFormation Stack for establishing duplex connections thorough NodeJS Lambdas with dynamoDB
          via WebSocketAPI, to stream & update operational live data, eliminating network latency by 18%
        </p>
        <p className="py-2 text-[13px]">
          Designed an Natural Language Processing based web scraping model using Spacy Python, esclating iQuizUAnswer
          marketing productivity by 55% in outreach activities cutting down manual search
        </p>
        <p className="py-2 text-[13px]">
          Implemented a full-stack app with Redux based React state management & NodeJS backend empowering the marketing
          team with an interactive dashboard to access web scrapped data stored in AWS RDS
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
      <div className="mt-5 lg:flex gap-10">
        <div className="text-center shadow-lg py-5 px-10 rounded-xl mb-10 hover:scale-110 transition-all flex-1">
          <center>
            <img className="r" src={Wipro} width={100} height={100} alt="wipro logo" />
          </center>
          <h3 className="text-lg font-medium pt-8 pb-2  ">
            Data Engineer, Wipro Limited, Bengaluru
            <p className="text-sm font-light">
              OSIsoft PI Data Historian, Tableau
            </p>
          </h3>
          <p className="py-2 text-[13px]">
            Built logical schema of organisational process, performed ETL procedures & carried out validation for sustainability KPI of 3
            affiliates in SABIC Corporation using the data historian software
          </p>
          <p className="py-2 text-[13px]">
            Conducted data migration for all organizational elements from Microsoft SQL Server to OSIsoft Servers for further analytics
          </p>
          <p className="py-2 text-[13px]">
            Designed interactive Tableau dashboards for comprehensive visualization of sustainability KPI metrics, collaborated with
            clients to identify & implement a targeted 6% reduction in CO2 emissions
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
            <img src={Nlcindia} width={85} height={100} alt="nlc logo" />
          </center>
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            Software Developer Intern, NLC India Limited, Chennai
            <p className="text-sm font-light">
              HTML, Bootstrap, JQuery, JavaScript, PHP, MySQL
            </p>
          </h3>
          <p className="py-2 text-[13px]">
            Achieved 73% enhancement in usability by revamping the existing
            House Rent Allowance Claim System & Post-Retirement Medical
            Allowance Claim System web apps for the HR Department using
            Bootstrap & PHP
          </p>
          <p className="py-2 text-[13px]">
            Delivered an array of features, including status tracking,
            performance reviews, report & receipt generation, OTP
            authentication, and streamlined helpline request processing
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
