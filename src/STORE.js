const STORE = {
  projectsArray: ["project-1", "project-2", "project-3"],
  peopleArray: ["person-1", "person-2", "person-3"],
  personActionsByProject: {
    "person-1": {
      projectList: ["project-1", "project-2", "project-3"],
      projects: {
        "project-1": ["p1-action-1", "p1-action-2", "p1-action-3"],
        "project-2": ["p2-action-1", "p2-action-2", "p2-action-3"],
        "project-3": ["p3-action-1", "p3-action-2", "p3-action-3"],
      },
    },
    "person-2": {
      projectList: ["project-1", "project-2", "project-3"],
      projects: {
        "project-1": ["p1-action-1", "p1-action-2", "p1-action-3"],
        "project-2": ["p2-action-1", "p2-action-2", "p2-action-3"],
        "project-3": ["p3-action-1", "p3-action-2", "p3-action-3"],
      },
    },
    "person-3": {
      projectList: ["project-1", "project-2", "project-3"],
      projects: {
        "project-1": ["p1-action-11", "p1-action-22", "p1-action-3"],
        "project-2": ["p2-action-12", "p2-action-23", "p2-action-3"],
        "project-3": ["p3-action-13", "p3-action-24", "p3-action-3"],
      },
    },
  },
};

export default STORE;
