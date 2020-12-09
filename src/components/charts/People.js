import React, { useContext, useState } from "react";
import { Bar } from "react-chartjs-2";
import DataContext from "../../context/data/dataContext";

const People = () => {
  const dataContext = useContext(DataContext);
  const { data } = dataContext;
  const [hoursArray, setHoursArray] = useState([])
  const [dataParsed, setDataParsed] = useState(false);
  const [chartCreated, setChartsCreated] = useState(false);

  const chartColors = ["red","blue","green"]
  let chartData = null;
  let employeeList;
  if(data){
    employeeList = data.peopleArray
  }

  if(data !== null && dataParsed !==true){
    let tempTotal = [];
    let hours = [];
    // Loop Through List of Projects
    for(let i = 0; i < data.projectsArray.length; i++){
      let projectName = data.projectsArray[i];
      tempTotal = []
      // loop through people
         data.peopleArray.forEach(person => {

          if(data.personActionsByProject[person].projects[projectName]){
            tempTotal.push(data.personActionsByProject[person].projects[projectName].map(action => data.actions[action].hours).reduce((accumulator, reducer)=> accumulator + reducer))
          } else {
            tempTotal.push(0)
          }       
        })

        hours.push(tempTotal)
      }
 
      // [0] project 1 : [person 1, person 2, person 3]
      // [0] project 2 : [person 1, person 2, person 3]
      // [0] project 3 : [person 1, person 2, person 3]
      setHoursArray(hours)
      setDataParsed(true)
  }

  if(data !== null && dataParsed === true){
    let datasets = [];

    for(let i = 0; i < data.projectsArray.length; i++){
      let projectName = data.projectsArray[i];
      let projectData = {};
      projectData.label = projectName;
      projectData.data = hoursArray[i];
      projectData.backgroundColor = chartColors[i] || "white";
      datasets.push(projectData)

    }

    chartData = {
      labels: employeeList,
      datasets: datasets
    };
  }



  return ( chartData &&
    <div className='people-dept'>
       <Bar
        data={chartData}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [{ stacked: true }],
            yAxes: [{ stacked: true }],
          },
        }}
      />

    </div>
  );
};

export default People;
