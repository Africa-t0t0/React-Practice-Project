import { useState } from "react";

import Sidebar from "./Components/Sidebar";
import ProjectForm from "./Components/ProjectForm";
import DefaultView from "./Components/DefaultView";
import SelectedProject from "./Components/SelectedProject";

function App() {

  const [projectsState, setProjectsState] = useState({
    currentAction: 'not-selected',
    selectedProject: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTasks(text) {
    setProjectsState(prevState => {
      const newTasks = {
        text: text,
        projectId: prevState.selectedProject,
        id: Math.random()
      }
      return {
        ...prevState,
        tasks: [newTasks, ...prevState.tasks]
      }
    });
  }

  function handleDeleteTasks(id) {
    setProjectsState(
      prevState => {
        return {
          ...prevState,
          tasks: prevState.tasks.filter((task) => task.id !== id)
        }
      }
    );
  }

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
    });
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

  function handleDeleteProject () {
    setProjectsState(
      prevState => {
        return {
          ...prevState,
          selectedProject: undefined,
          currentAction: "not-selected",
          projects: prevState.projects.filter((project) => project.id !== prevState.selectedProject)
        }
      }
    );
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProject)

  let content = <SelectedProject
                  project={selectedProject}
                  onDelete={handleDeleteProject}
                  onAddTasks={handleAddTasks}
                  onDeleteTasks={handleDeleteTasks}
                  tasks={projectsState.tasks}
                />

  if (projectsState.currentAction === 'adding') {
    content = <ProjectForm onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.currentAction === 'not-selected') {
    content = <DefaultView
                onStartAddProject={handleStartProject}
              />
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
