import Sidebar from "./Components/Sidebar";
import ProjectForm from "./Components/ProjectForm";
import DefaultView from "./Components/DefaultView";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      {/* <ProjectForm /> */}
      <DefaultView />
    </main>
  );
}

export default App;
