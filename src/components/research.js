import React from "react";
import { BiLinkExternal } from "react-icons/bi";

function research() {
  return (
    <section id="research">
      <div>
        <h3 className="text-3xl text-teal-600 text-center py-1">
          Research Papers
        </h3>
      </div>
      <div className="mt-5 lg:flex gap-10">
        <div className="text-center shadow-lg py-5 px-10 rounded-xl mb-10 flex-1 hover:scale-110 transition-all">
          <h3 className="text-lg font-medium pb-2">
            <a
              href="https://ieeexplore.ieee.org/document/9590113"
              target="_blank"
            >
              A Comprehensive Analysis of Machine Learning Methods for Air
              Pollution Forecasting <BiLinkExternal className="inline-block" />
            </a>
          </h3>
          <p className="py-2 text-[13px]">
            Performed data mining, modelled 7 machine learning algorithms, hyper
            parameter tuning, data validation and performance analysis to
            determine the best model.
          </p>
          <p className="py-2 text-[13px]">
            Acheived average accuracy of 73% for the best performing model,
            random forest, across 5 cities in India.
          </p>
          <p className="py-2 text-[13px]">
            Collaborated with the Tableau team to visualise and draw insights
            from the processed data.
          </p>
          <p className="py-2 text-[13px]">
            Presented at the 2nd International Conference on Innovative and
            Creative Information Technology 2021 organized by IEEE at Satya
            Wacana Christian University, Indonesia
          </p>
          {/* <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p> */}
        </div>
        <div className="text-center shadow-lg py-5 px-10 rounded-xl mb-10 flex-1 hover:scale-110 transition-all">
          <h3 className="text-lg font-medium pb-2">
            <a
              href="https://www.irjet.net/archives/V8/i9/IRJET-V8I912.pdf"
              target="_blank"
            >
              A Comparative Analysis of Parallelisation Using OpenMP and Pymp
              for Image Convolution <BiLinkExternal className="inline-block" />
            </a>
          </h3>
          <p className="py-2 text-[13px]">
            Parallises two fundamental algorithms of digital image processing:
            Otsu segmentation and Sobel edge detection using OpenMP and Pymp
          </p>
          <p className="py-2 text-[13px]">
            Compares the performances offered by both interfaces in terms of
            speedup, efficiency and improvement
          </p>
          <p className="py-2 text-[13px]">
            Analyses why the metrics differ greatly for the two algorithms
          </p>
          <p className="py-2 text-[13px]">
            Published in the International Research Journal of Engineering and
            Technology(IRJET) in Volume – 8, Issue – 9, ISSN: 2395-0056
          </p>
        </div>
      </div>
    </section>
  );
}

export default research;
