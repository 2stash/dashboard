import React, {useState, useContext} from "react";
import excel from "./excel.PNG";
import gif from "./herodashboard.gif";
import DataContext from "../../context/data/dataContext";
import * as XLSX from 'xlsx';
import STORE from "../../STORE";

const LandingPage = () => {
  const dataContext = useContext(DataContext);
  const { setInitialState,importData, importedData,processData } = dataContext;

  const [hideshow, setHideShow] = useState({display:"none"})

  const [hideGenericButton, setHideGenericButton] = useState({})


  const readExcel = (e) => {

    const uploadedFiles = e.target.files;
    const uploadedFilesDataArray = [];
    
    for(let i = 0; i < uploadedFiles.length; i++){
      let promise = new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        fileReader.readAsArrayBuffer(uploadedFiles[i])
  
        fileReader.onload=(e)=> {

          let bufferArray = e.target.result;
  
          let wb = XLSX.read(bufferArray, {type: 'buffer'});
  
          let wsname = wb.SheetNames[0];
  
          let ws = wb.Sheets[wsname];
  
          let data = XLSX.utils.sheet_to_json(ws)
  
          resolve([data, wsname])
        }
  
        fileReader.onerror = ((error)=>{
          reject(error)
        })
      })
  
      promise.then((info)=> {
        let data = info[0]
        let wsname = info[1]
 
        uploadedFilesDataArray.push([data,wsname])
       })

    }

    importData(uploadedFilesDataArray)
    setHideShow({})
    setHideGenericButton({display: "none"})
  }

  const buildDashboard = () => {
    processData(importedData)
  }

  const handleFakeDashboard = () => {
    setInitialState(STORE)
  }


  return (
    <div className='landing-container'>
      <div className='landing-hero-container'>
        <h1 className='landing-hero-text'>
          Build your dashboard from excel files!
        </h1>
        <div className='landing-sub-text'>
          ExcelDash allows you to upload multiple action item lists and a
          dash board will be created <strong>instantly</strong>
        </div>
      </div>

      <div>
      <h2>Wanna check out the Dashboard?</h2>
    
      <button onClick={handleFakeDashboard} className={hideGenericButton}>Create Generic Dashboard</button>
</div>

      <div>
      <h2>Wanna try with your own data?</h2>
      <input type="file" onChange={readExcel} multiple placeholder="Upload Your Files"/>
        <button onClick={buildDashboard} style={hideshow}>Build Dashboard</button>
</div>



      

      <h2 className='how-to-use-hero'>Combine multiple files into one dashboard</h2>
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
          <img className="image-gif" src={gif} alt="gif of dashboard"/>
        </div>

        </div>





      <div className='how-to-use'>
        <h2 className='how-to-use-hero margin-top'>Name your columns as shown below!</h2>

        <div className='how-to-use-table'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Project</th>
                <th>Priority</th>
                <th>Owner</th>
                <th>Description</th>
                <th>Hours</th>
              </tr>
            </thead>
            {/* <tbody>
            <tr>
              <td>1</td>
              <td>Paper</td>
              <td>High</td>
              <td>Jim</td>
              <td>Sell Paper to </td>
              <td>8</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Paper</td>
              <td>High</td>
              <td>Pam</td>
              <td>Respond to customer information request.</td>
              <td>2</td>
            </tr>
          </tbody> */}
          </table>
        </div>
          
        <h2 className='how-to-use-hero'>
          Here is an picture of an example file
        </h2>
        <img src={excel} className='excel-img' />



      </div>
    </div>
  );
};

export default LandingPage;
