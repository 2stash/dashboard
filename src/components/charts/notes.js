      // for (let j = 0; j < data.peopleArray.length; j++){
      //   let person = data.peopleArray[j]
        
      //   tempTotal.push(data.personActionsByProject[person].projects[projectName]
      //   .map(action => data.actions[action].hours).reduce((accumulator, reducer)=> accumulator + reducer))
     
      //   hours.push(tempTotal)
      // }




      // data.peopleArray.map(person => (
      //   tempTotal.push(data.personActionsByProject[person].projects[projectName]
      //   .map(action => data.actions[action].hours).reduce((accumulator, reducer)=> accumulator + reducer))
      // )) 
      //   hours.push(tempTotal)




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