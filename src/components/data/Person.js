import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import DataContext from "../../context/data/dataContext";

const Person = (props) => {
  // let { id } = useParams();
  // console.log(id)

  const dataContext = useContext(DataContext);
  const { data } = dataContext;

  return (
    <div>
      {data ? <div>{data.personActionsByProject[props.name].projectList.map(project => (
        data.personActionsByProject[props.name].projects[project].map(action => (
          <li>{action}</li>
        ))

      ))}</div> : null}
    </div>
  )
}

export default Person
