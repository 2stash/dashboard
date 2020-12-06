import React, { useContext, useState } from "react";
import { Bar } from "react-chartjs-2";
import DataContext from "../../context/data/dataContext";

const Projects = () => {
  const dataContext = useContext(DataContext);
  const { data } = dataContext;
  const [hoursArray, setHoursArray] = useState([])
  const [dataParsed, setDataParsed] = useState(false);

  let projectList;
  if(data){
    projectList = data.projectsArray
  }

  // Add up project hours per person, by project
  if (data !== null && dataParsed !==true) {
    let tempArray = [];

    // Loop through list of People
    for (let i = 0; i < data.peopleArray.length; i++) {
      let hours = [];
      let personName = data.peopleArray[i]
      // Get the Persons List of Projects
      hours = data.personActionsByProject[data.peopleArray[i]].projectList
      .map((project, index) => (
      // get Persons' list of action by project
        data.personActionsByProject[personName].projects[project]
          .map((action) => data.actions[action].hours)
          .reduce(
            (accumulator, reducer) => accumulator + reducer
          )
      ))
      tempArray.push(hours)     
  }
  // tempArray data is:
    // [0] person 1 : [project 1, project 2, project 3]
    // [1] person 2 : [project 1, project 2, project 3]   
    // [2] person 3 : [project 1, project 2, project 3]

  setHoursArray(tempArray)

  // set data parsed to true so this function only runs once
  setDataParsed(true)

  }

  const chartData = {
    labels: projectList,
    datasets: [
      { label: "Person 1", data: hoursArray[0], backgroundColor: "red" },
      { label: "Person 2", data: hoursArray[1], backgroundColor: "blue" },
      { label: "Person 3", data: hoursArray[2], backgroundColor: "green" },
    ],
  };

  return (
    <div className='project-dept'>
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

export default Projects;
