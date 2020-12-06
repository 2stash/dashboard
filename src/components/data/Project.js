import React, { useContext } from "react";
import DataContext from "../../context/data/dataContext";

const Project = (props) => {
  const dataContext = useContext(DataContext);
  const { data } = dataContext;

  return (
    <div className='project'>
      <h3 className='personnel-title'>{props.name}</h3>
      <div>
        <h4 className='personnel-title'>Total # of Actions by Project</h4>

        <table>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Description</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.peopleArray.map((person) =>
                data.personActionsByProject[person].projects[props.name].map(
                  (action) => (
                    <tr key={action}>
                      <td>{data.actions[action].owner}</td>
                      <td>{data.actions[action].description}</td>
                      <td>{data.actions[action].hours}</td>
                    </tr>
                  )
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Project;
