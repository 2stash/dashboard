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
      hours: {
        "project-1": 24,
        "project-2": 24,
        "project-3": 24,
      }
    },
    "person-2": {
      projectList: ["project-1", "project-2", "project-3"],
      projects: {
        "project-1": ["p1-action-4", "p1-action-5", "p1-action-6"],
        "project-2": ["p2-action-4", "p2-action-5", "p2-action-6"],
        "project-3": ["p3-action-4", "p3-action-5"],
      },
      hours: {
        "project-1": 24,
        "project-2": 24,
        "project-3": 24,
      }
    },
    "person-3": {
      projectList: ["project-1", "project-2", "project-3"],
      projects: {
        "project-1": ["p1-action-7", "p1-action-8"],
        "project-2": ["p2-action-7", "p2-action-8", "p2-action-9"],
        "project-3": ["p3-action-6", "p3-action-7", "p3-action-8"],
      },
      hours: {
        "project-1": 24,
        "project-2": 24,
        "project-3": 24,
      }
    },
  },
  projectHours: {
    "project-1": [24, 24,24],
    "project-2": [24, 24,24],
    "project-3": [24, 24,24],
  },
  actions: {
    "p1-action-1": {
      priority: "High",
      description: "Complete p1-action-1",
      hours: 8,
      owner: "person-1",
      project: "project-1",
    },
    "p1-action-2": {
      priority: "Normal",
      description: "Complete p1-action-2",
      hours: 3,
      owner: "person-1",
      project: "project-1",
    },
    "p1-action-3": {
      priority: "Normal",
      description: "Complete p1-action-3",
      hours: 5,
      owner: "person-1",
      project: "project-1",
    },
    "p2-action-1": {
      priority: "Normal",
      description: "Complete p2-action-1",
      hours: 8,
      owner: "person-1",
      project: "project-2",
    },
    "p2-action-2": {
      priority: "High",
      description: "Complete p2-action-2",
      hours: 8,
      owner: "person-1",
      project: "project-2",
    },
    "p2-action-3": {
      priority: "Normal",
      description: "Complete p2-action-3",
      hours: 1,
      owner: "person-1",
      project: "project-2",
    },
    "p3-action-1": {
      priority: "Normal",
      description: "Complete p3-action-1",
      hours: 2,
      owner: "person-1",
      project: "project-3",
    },
    "p3-action-2": {
      priority: "Normal",
      description: "Complete p3-action-2",
      hours: 3,
      owner: "person-1",
      project: "project-3",
    },
    "p3-action-3": {
      priority: "High",
      description: "Complete p3-action-3",
      hours: 1,
      owner: "person-1",
      project: "project-3",
    },
    "p1-action-4": {
      priority: "High",
      description: "Complete p1-action-4",
      hours: 8,
      owner: "person-2",
      project: "project-1",
    },
    "p1-action-5": {
      priority: "Normal",
      description: "Complete p1-action-5",
      hours: 1,
      owner: "person-2",
      project: "project-1",
    },
    "p1-action-6": {
      priority: "Normal",
      description: "Complete p1-action-6",
      hours: 2,
      owner: "person-2",
      project: "project-1",
    },
    "p2-action-4": {
      priority: "Normal",
      description: "Complete p2-action-4",
      hours: 3,
      owner: "person-2",
      project: "project-2",
    },
    "p2-action-5": {
      priority: "Normal",
      description: "Complete p2-action-5",
      hours: 2,
      owner: "person-2",
      project: "project-2",
    },
    "p2-action-6": {
      priority: "High",
      description: "Complete p2-action-6",
      hours: 8,
      owner: "person-2",
      project: "project-2",
    },
    "p3-action-4": {
      priority: "Normal",
      description: "Complete p3-action-4",
      hours: 4,
      owner: "person-2",
      project: "project-3",
    },
    "p3-action-5": {
      priority: "High",
      description: "Complete p3-action-5",
      hours: 8,
      owner: "person-2",
      project: "project-3",
    },
    "p1-action-7": {
      priority: "Normal",
      description: "Complete p1-action-7",
      hours: 8,
      owner: "person-3",
      project: "project-1",
    },
    "p1-action-8": {
      priority: "High",
      description: "Complete p1-action-8",
      hours: 8,
      owner: "person-3",
      project: "project-1",
    },
    "p2-action-7": {
      priority: "High",
      description: "Complete p2-action-7",
      hours: 8,
      owner: "person-3",
      project: "project-2",
    },
    "p2-action-8": {
      priority: "Normal",
      description: "Complete p2-action-8",
      hours: 8,
      owner: "person-3",
      project: "project-2",
    },
    "p2-action-9": {
      priority: "High",
      description: "Complete p2-action-9",
      hours: 8,
      owner: "person-3",
      project: "project-2",
    },
    "p3-action-6": {
      priority: "High",
      description: "Complete p3-action-6",
      hours: 8,
      owner: "person-3",
      project: "project-3",
    },
    "p3-action-7": {
      priority: "High",
      description: "Complete p3-action-7",
      hours: 8,
      owner: "person-3",
      project: "project-3",
    },
    "p3-action-8": {
      priority: "Normal",
      description: "Complete p3-action-8",
      hours: 8,
      owner: "person-3",
      project: "project-3",
    },
  },
};

export default STORE;
