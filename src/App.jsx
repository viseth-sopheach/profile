import { useEffect } from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // useEffect(() => {
  //   const sendEmail = async () => {
  //     try {
  //       let res = await fetch("/api/send-email", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //       });
  //       const data = await res.json();
  //       console.log("Email status:", data);
  //     } catch (error) {
  //       console.error("Fetch error:", error);
  //     }
  //   };

  //   sendEmail();
  // }, []); // The empty array [] ensures this only runs ONCE when the app loads

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
