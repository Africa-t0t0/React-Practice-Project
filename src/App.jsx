import Sidebar from "./Components/Sidebar";
import ProjectForm from "./Components/ProjectForm";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <ProjectForm />
    </main>
  );
}

export default App;
