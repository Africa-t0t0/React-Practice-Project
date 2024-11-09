import { useState } from "react";

import Sidebar from "./Components/Sidebar";
import ProjectForm from "./Components/ProjectForm";
import DefaultView from "./Components/DefaultView";

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

  let content;

  if (projectsState.currentAction === 'adding') {
    content = <ProjectForm />
  } else if (projectsState.currentAction === 'not-selected') {
    content = <DefaultView
                onStartAddProject={handleStartProject}
              />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartProject}
      />
      {content}
    </main>
  );
}

export default App;
