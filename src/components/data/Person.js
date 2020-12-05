import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../context/data/dataContext";

const Person = (props) => {
  // let { id } = useParams();
  // console.log(id)

  const dataContext = useContext(DataContext);
  const { data } = dataContext;

  return (
    <div className='people'>
      <div>
        <h4>{props.name} Total # of Actions by Project</h4>
        <ul>
          {data &&
            data.personActionsByProject[props.name].projectList.map(
              (project, index) => (
                <li key={`${project}-${index}`}>
                  {project}:{" "}
                  {data &&
                    data.personActionsByProject[props.name].projects[project]
                      .length}
                </li>
              )
            )}
        </ul>
      </div>

      <h4>{props.name} Actions</h4>
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
      </div>
    </div>
  );
};

export default Person;
