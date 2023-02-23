import React from "react";
import { AiFillGithub } from "react-icons/ai";

function projects() {
  return (
    <section id="projects">
      <div>
        <h3 className="text-3xl text-teal-600 text-center py-1  dark:text-white ">
          Projects
        </h3>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-10">
        <div className="text-center shadow-lg py-5 px-10 rounded-xl mb-10  dark:bg-white flex-1">
          <h3 className="text-lg font-medium pb-2">
            <a
              href="https://github.com/mohith-j/SDSE-Project-Phase-2"
              target="_blank"
            >
              Spatiotemporal Moving Object Trajectory Data Visualisation
              <AiFillGithub className="inline-block ml-1" />
            </a>
            <p className="text-sm font-light">
              Scala, Spark SQL, React, Finagle API, Deck.gl
            </p>
          </h3>
          <p className="py-2 text-[13px]">
            Developed a full stack application that performs spatial range,
            spatio-temporal range and KNN queries on NYC taxi trips dataset
            using Spark SQL.
          </p>
          <p className="py-2 text-[13px]">
            Retrieved query results using Finagle API in Scala and utilized
            deck.gl React library to render complex visualisations.
          </p>
        </div>
        <div className="text-center shadow-lg py-5 px-10 rounded-xl mb-10  dark:bg-white flex-1">
          <h3 className="text-lg font-medium pb-2">
            <a href="https://github.com/mohith-j/LoBerta" target="_blank">
              Improving Performance of Language Models on Logical Reasoning
              Tasks
              <AiFillGithub className="inline-block ml-1" />
            </a>
            <p className="text-sm font-light">Python, Transformers</p>
          </h3>
          <p className="py-2 text-[13px]">
            Trained different versions of BERT and GPT3 LMs with prompting
            techniques and fine-tuned them for logical reasoning tasks
          </p>
          <p className="py-2 text-[13px]">
            Used ULMFiT method on RoBERTa to increase performance by 10% when
            compared to baseline BERT Large model.
          </p>
        </div>
        <div className="text-center shadow-lg py-5 px-10 rounded-xl mb-10  dark:bg-white flex-1">
          <h3 className="text-lg font-medium pb-2">
            <a
              href="https://github.com/mohith-j/capstone_project-1"
              target="_blank"
            >
              Air Quality Prediction App
              <AiFillGithub className="inline-block ml-1" />
            </a>
            <p className="text-sm font-light">
              Python, Streamlit, Keras, sklearn, xgboost
            </p>
          </h3>
          <p className="py-2 text-[13px]">
            Web app developed with Streamlit that forecasts PM2.5 levels with a
            trained random forest model with an accuracy of 67%. Uses
            OpenWeather API to fetch current weather conditions for prediction.
          </p>
          <p className="py-2 text-[13px]">
            Performed data mining to determine best model and presented our
            findings from Exploratory Data Analysis in an IEEE Conference.
          </p>
        </div>
        <div className="text-center shadow-lg py-5 px-10 rounded-xl mb-10  dark:bg-white flex-1">
          <h3 className="text-lg font-medium pb-2">
            <a href="https://github.com/mohith-j" target="_blank">
              Sports Team Web Application
              <AiFillGithub className="inline-block ml-1" />
            </a>
            <p className="text-sm font-light">React, CSS, MongoDB</p>
          </h3>
          <p className="py-2 text-[13px]">
            Developed a single-page application for a sports franchise using
            React, does user authentication and fetches data from Firebase, that
            provides info about team, players and matches.
          </p>
          <p className="py-2 text-[13px]">
            Implemented with routes, authentication guards, reusable components
            and React UI libraries with filtering, sorting features and smooth
            transitions.
          </p>
        </div>
        <div className="text-center shadow-lg py-5 px-10 rounded-xl mb-10  dark:bg-white flex-1">
          <h3 className="text-lg font-medium pb-2">
            <a
              href="https://github.com/mohith-j/Facial-Detection-based-Attendance-Management-System"
              target="_blank"
            >
              Facial Detection based Attendance Management System
              <AiFillGithub className="inline-block ml-1" />
            </a>
            <p className="text-sm font-light">Python, OpenCV, tkinter</p>
          </h3>
          <p className="py-2 text-[13px]">
            Uses Haar-Cascade for Face detection and Linear Binary Pattern
            histogram algorithm to recognize faces.
          </p>
          <p className="py-2 text-[13px]">
            Developed in python with OpenCV for image processing and tkinter for
            UI.
          </p>
        </div>
        <div className="text-center shadow-lg py-5 px-10 rounded-xl mb-10  dark:bg-white flex-1">
          <h3 className="text-lg font-medium pb-2">
            <a
              href="https://github.com/mohith-j/Apartment-Rental"
              target="_blank"
            >
              Apartment Rentals
              <AiFillGithub className="inline-block ml-1" />
            </a>
            <p className="text-sm font-light">HTML, CSS, JavaScript, PHP, PostgreSQL</p>
          </h3>
          <p className="py-2 text-[13px]">
            A database management project that allows people to filter based on preferences, sort based on prices, search for particular communities and could request for booking if interested.
          </p>
          <p className="py-2 text-[13px]">
            Has an admin portal which enables admin of various communities to post about openings, review requests and look at residents info. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default projects;
