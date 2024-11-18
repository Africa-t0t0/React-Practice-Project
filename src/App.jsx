import { useState } from "react";

import Sidebar from "./Components/Sidebar";
import ProjectForm from "./Components/ProjectForm";
import DefaultView from "./Components/DefaultView";
import SelectedProject from "./Components/SelectedProject";

function App() {

  const [projectsState, setProjectsState] = useState({
    currentAction: 'not-selected',
    selectedProject: undefined,
    projects: []
  });

  function handleStartProject () {
    setProjectsState(
      prevState => {
        return {
          ...prevState,
          currentAction: 'adding'
        }
      }
    );
  }

  function handleAddProject (projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        currentAction: 'not-selected',
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancelAddProject () {
    setProjectsState(
      prevState => {
        return {
          ...prevState,
          currentAction: 'not-selected'
        }
      }
    );
  }

  function handleSelectProject (id) {
    setProjectsState(
      prevState => {
        return {
          ...prevState,
          currentAction: 'selected',
          selectedProject: id,
        }
      }
    );
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProject)

  let content = <SelectedProject project={selectedProject} />

  if (projectsState.currentAction === 'adding') {
    content = <ProjectForm onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.currentAction === 'not-selected') {
    content = <DefaultView
                onStartAddProject={handleStartProject}
              />
  } else if (projectsState.currentAction === 'selected') {
    content = <SelectedProject project={selectedProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
