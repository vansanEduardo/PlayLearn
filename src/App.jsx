import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "../src/components/navbar/Navbar.jsx"

function App() {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
