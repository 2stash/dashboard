import React, { useContext, useState } from "react";
import { Bar } from "react-chartjs-2";
import DataContext from "../../context/data/dataContext";

const People = () => {
  const dataContext = useContext(DataContext);
  const { data } = dataContext;
  const [hoursArray, setHoursArray] = useState([])
  const [dataParsed, setDataParsed] = useState(false);

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
      data.peopleArray
      .map(person => (
        tempTotal.push(data.personActionsByProject[person].projects[projectName]
        .map(action => data.actions[action].hours).reduce((accumulator, reducer)=> accumulator + reducer))
      )) 
        hours.push(tempTotal)
    }
 
    // [0] project 1 : [person 1, person 2, person 3]
    // [0] project 2 : [person 1, person 2, person 3]
    // [0] project 3 : [person 1, person 2, person 3]
    setHoursArray(hours)
    setDataParsed(true)
  }


  const chartData = {
    labels: employeeList,
    datasets: [
      { label: "Project 1", data: hoursArray[0], backgroundColor: "red" },
      { label: "Project 2", data: hoursArray[1], backgroundColor: "blue" },
      { label: "Project 3", data: hoursArray[2], backgroundColor: "green" },
    ],
  };

  return (
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
      <hr/>
    </div>
  );
};

export default People;
