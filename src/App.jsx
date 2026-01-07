import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Skill from "./pages/Skill";
import Project from "./pages/Project";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="pt-0">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Education />
                <Skill />
                <Project />
                <Contact />
              </>
            }
          />
          <Route path="/education" element={<Education />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
