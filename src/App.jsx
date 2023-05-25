import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MenuItems from "./components/MenuItems";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Service from "./routes/Service";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/service" element={<Service></Service>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
