import React, { useContext } from "react";
import DataContext from "../../context/data/dataContext";

const Person = (props) => {
  const dataContext = useContext(DataContext);
  const { data } = dataContext;

  return (
    <div className='people'>
      <h3 className='personnel-title'>{props.name}</h3>
      <div>
        <h4 className='personnel-title'>Total # of Actions by Project</h4>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Number of Actions</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.personActionsByProject[props.name].projectList.map(
                (project, index) => (
                  <tr key={`${project}-${index}`}>
                    <td>{project}</td>
                    <td>
                      {data &&
                        data.personActionsByProject[props.name].projects[
                          project
                        ].length}
                    </td>
                    <td>
                      {data &&
                        data.personActionsByProject[props.name].projects[
                          project
                        ]
                          .map((action) => data.actions[action].hours)
                          .reduce(
                            (accumulator, reducer) => accumulator + reducer
                          )}
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>

      <h4 className='personnel-title'>High Priority Actions</h4>
      <div>
        {data ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Description</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                {data.personActionsByProject[props.name].projectList.map(
                  (project, index) =>
                    data.personActionsByProject[props.name].projects[
                      project
                    ].map((action) =>
                      data.actions[action].priority === "High" ? (
                        <tr key={`${index}-${action}`}>
                          <td>{data.actions[action].project}</td>
                          <td>{data.actions[action].description}</td>
                          <td>{data.actions[action].hours}</td>
                        </tr>
                      ) : null
                    )
                )}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Person;
