import React, { useState, useContext } from "react";
import excel from "./excel.PNG";
import gif from "./herodashboard.gif";
import DataContext from "../../context/data/dataContext";
import * as XLSX from "xlsx";
import STORE from "../../STORE";

const LandingPage = () => {
  const dataContext = useContext(DataContext);
  const {
    setInitialState,
    importData,
    importedData,
    processData,
  } = dataContext;

  const [hideshow, setHideShow] = useState({ display: "none" });

  const [hideGenericButton, setHideGenericButton] = useState({});

  const readExcel = (e) => {
    const uploadedFiles = e.target.files;
    const uploadedFilesDataArray = [];

    for (let i = 0; i < uploadedFiles.length; i++) {
      let promise = new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        fileReader.readAsArrayBuffer(uploadedFiles[i]);

        fileReader.onload = (e) => {
          let bufferArray = e.target.result;

          let wb = XLSX.read(bufferArray, { type: "buffer" });

          let wsname = wb.SheetNames[0];

          let ws = wb.Sheets[wsname];

          let data = XLSX.utils.sheet_to_json(ws);

          resolve([data, wsname]);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      });

      promise.then((info) => {
        let data = info[0];
        let wsname = info[1];

        uploadedFilesDataArray.push([data, wsname]);
      });
    }

    importData(uploadedFilesDataArray);
    setHideShow({});
    setHideGenericButton({ display: "none" });
  };

  const buildDashboard = () => {
    processData(importedData);
  };

  const handleFakeDashboard = () => {
    setInitialState(STORE);
  };

  return (
    <div className='landing-container'>
      <section className='grey'>
        <div className='landing-hero-container'>
          <div className='landing-left'>
            <h1 className='landing-hero-text'>Build your dashboard!</h1>
            <div className='landing-sub-text'>
              ExcelDash allows you to upload multiple excel files and a
              dashboard will be created <strong>instantly</strong>
            </div>
            <div className='landing-buttons-container'>
              <div className='landing-buttons-card'>
                <h2>Check out an example Dashboard!</h2>

                <button
                  onClick={handleFakeDashboard}
                  className={`btn btn-border-pop ${hideGenericButton}`}
                >
                  Create Generic Dashboard
                </button>
              </div>

              <div className='landing-buttons-card'>
                <h2>Build a dashboard with your own data</h2>
                <h4>Column names must match!Read below for file format requirements. </h4>
                <div className="btn-input">
                <input
                  type='file'
                  onChange={readExcel}
                  multiple
                  placeholder='Upload Your Files'
                />
                <button
                  onClick={buildDashboard}
                  className={`btn btn-border-pop `}
                  style={hideshow}
                >
                  Build Dashboard
                </button>
                </div>
              </div>

            </div>
          </div>

          {/* right side hero div */}
          <div className='landing-right'>
            <div className='combine-files'>
              <div>
                <div className='icons'>
                  <span className='icon-excel'>
                    <i className='far fa-file-excel'></i>
                  </span>
                  <span className='icon-person'>
                    <i className='fas fa-user'></i>
                  </span>
                </div>
                <div className='icons'>
                  <span className='icon-excel'>
                    <i className='far fa-file-excel'></i>
                  </span>
                  <span className='icon-person'>
                    <i className='fas fa-user'></i>
                  </span>
                </div>
                <div className='icons'>
                  <span className='icon-excel'>
                    <i className='far fa-file-excel'></i>
                  </span>
                  <span className='icon-person'>
                    <i className='fas fa-user'></i>
                  </span>
                </div>
              </div>
              <div>
                <span className='icon-arrow'>
                  <i className='fas fa-arrow-right'></i>
                </span>
              </div>
              <div>
                <img className='image-gif' src={gif} alt='gif of dashboard' />
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* 2nd hero section */}

      <section className='how-to-use'>

      {/* left column */}
        <div className="second-landing-left">
        <div className="second-landing-left-size">
          <h2 className='how-to-use-hero margin-top'>
            Name your columns as shown below!
          </h2>
          <div className='how-to-use-table'>
            <table>
              <thead className="table-head">
                <tr>
                  <th>ID</th>
                  <th>Project</th>
                  <th>Priority</th>
                  <th>Owner</th>
                  <th>Description</th>
                  <th>Hours</th>
                </tr>
              </thead>
             </table>
          </div>
          <h2 className='how-to-use-hero'>
            Here is an picture of an example file
          </h2>
          <img src={excel} className='excel-img' />
          </div>
        </div>

        {/* right column */}
        <div className='second-landing-right'>
            <div className="second-landing-right-size">
            <h2 className='second-landing-right-title'>Excel Format Requirements</h2>
            </div>
          </div>
      </section>

    </div>
  );
};

export default LandingPage;
