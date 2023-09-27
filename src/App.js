import "./index.css";
import Home from "./routes/Home";

import Contact from "./routes/Contact";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";
import Todo from "./Components/Todo";
import Projects from "./routes/Projects";
import Tictac from "./routes/Tictac";
import Hangman from "./routes/Hangman";
import  ColorPicker from "./routes/ColorPicker";
import Weather from "./routes/Weather";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/projects/todo" element={<Todo />} />
        <Route path="/projects/weatherApp" element={<Weather />} />
        <Route path="/projects/tictac" element={<Tictac/>} />
        <Route path="/projects/hangman" element={<Hangman/>} />
        <Route path="/projects/colorpicker" element={<ColorPicker/>} />
      </Routes>
    </>
  );
}

export default App;
