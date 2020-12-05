import React, { useContext } from "react";
import DataContext from "../../context/data/dataContext";

const Project = (props) => {
  const dataContext = useContext(DataContext);
  const { data } = dataContext;

  return (
    <div className='project'>
      <div>
        <h4>{props.name} Total # of Actions by Project</h4>
        <ul>
          {data &&
            data.peopleArray.map(person => (
              data.personActionsByProject[person].projects[props.name].map(action => (
                <li key={action}>{action}</li>
              ))
            ))   
          }

        </ul>
      </div>

      {/* <h4>{props.name} Actions</h4>
      <div>
        {data ? (
          <div>
            {data.personActionsByProject[
              props.name
            ].projectList.map((project, index) =>
              data.personActionsByProject[props.name].projects[project].map((action) => 
              <li key={`${index}-${action}`}>{action}</li>)
            )}
          </div>
        ) : null}
      </div> */}
    </div>
  );
};

export default Project;