import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Project from "./pages/Project";
import Skill from "./pages/Skill";

const App = () => {
  const routes = [
    {
      path: "/",
      element: (
        <>
          <Home />
          <Education />
          <Skill />
          <Project />
          <Contact />
        </>
      ),
    },
    { path: "/education", element: <Education /> },
    { path: "/skill", element: <Skill /> },
    { path: "/project", element: <Project /> },
    { path: "/contact", element: <Contact /> },
  ];

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
