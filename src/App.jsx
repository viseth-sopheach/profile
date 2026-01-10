import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    {
      path: "/education",
      element: <Education />,
    },
    {
      path: "/skill",
      element: <Skill />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ];

  return (
    <Router>
      <Navbar />
      <main className="pt-0">
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
