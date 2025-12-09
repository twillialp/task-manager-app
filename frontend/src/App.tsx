import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import { ProjectDetailsPage } from "./pages/ProjectDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="p-5 bg-zinc-900 h-screen">
        <h1 className="text-3xl font-bold text-white">Project Manager App</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<ProjectPage />}></Route>
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </>
  );
}
export default App;
