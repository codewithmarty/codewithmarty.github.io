import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Landing />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
