import {Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
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
        </Routes>
      </div>
    </>
  );
}
export default App;