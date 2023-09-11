import "./index.css";
import Home from "./routes/Home";

import Contact from "./routes/Contact";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";
import Todo from "./Components/Todo";
import Projects from "./routes/Projects";
import Tictac from "./routes/Tictac";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/todo" element={<Todo />} />
        <Route path="/projects/tictac" element={<Tictac/>} />

      </Routes>
    </>
  );
}

export default App;
