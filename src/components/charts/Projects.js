import React, { useContext, useState } from "react";
import { Bar } from "react-chartjs-2";
import DataContext from "../../context/data/dataContext";

const Projects = () => {
  const dataContext = useContext(DataContext);
  const { data } = dataContext;
  const [hoursArray, setHoursArray] = useState([]);
  const [dataParsed, setDataParsed] = useState(false);
  const [projectOrder, setProjectOrder] = useState([]);

  const chartColors = ['#1abc9c','#2ecc71','#3498db','#9b59b6','#34495e','#f1c40f','#e67e22','#e74c3c','#ecf0f1','#95a5a6','#16a085','#27ae60','#2980b9','#8e44ad','#2c3e50','#f39c12','#d35400','#c0392b','#bdc3c7','#7f8c8d' ]
  let chartData = null;
  let projectList;
  if (data) {
    projectList = data.projectsArray;
  }

  // Add up project hours per person, by project
  if (data !== null && dataParsed !== true) {
    let tempArray = [];
    let hours = [];
    // Loop through list of People
    for (let i = 0; i < data.peopleArray.length; i++) {
      hours = [];
      let personName = data.peopleArray[i];

      // Get the Persons List of Projects
      data.projectsArray.forEach((project) => {
        if (data.personActionsByProject[personName].projects[project]) {
          let hoursCount = data.personActionsByProject[personName].projects[
            project
          ]
            .map((action) => data.actions[action].hours)
            .reduce((accumulator, reducer) => accumulator + reducer);

          hours.push([hoursCount, personName, project]);
        } else {
          hours.push([0, personName, project]);
        }
      });
      tempArray.push(hours);
    }

    let dataForChart = [];
    let tempProjectOrder = [];
    for (let i = 0; i < tempArray[0].length; i++) {
      tempProjectOrder.push(tempArray[0][i][2]);
    }
    tempArray.forEach((person) => {
      dataForChart.push(person.map((hours) => hours[0]));
    });

    setHoursArray(dataForChart);
    setProjectOrder(tempProjectOrder);
    // set data parsed to true so this function only runs once
    setDataParsed(true);
  }

  if (data !== null && dataParsed === true) {
    let datasets = [];
    for (let i = 0; i < data.peopleArray.length; i++) {
      let personName = data.peopleArray[i];
      let personData = {};
      personData.label = personName;
      personData.data = hoursArray[i];
      personData.backgroundColor = chartColors[i] || "white";
      datasets.push(personData);
    }
    chartData = {
      labels: projectOrder,
      datasets: datasets,
    };
  }

  return (
    chartData && (
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
      </div>
    )
  );
};

export default Projects;
