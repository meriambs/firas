import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { Routes, Route } from "react-router-dom";
//import SideBar from "./Components/Side Bar/SideBar";
import PrivateRoute from "./Components/PrivateRoute";
import Write from "./Components/Write/Write";

function App() {
  return (
    <div className="App">
      {/*<SideBar/>*/}

      <Routes>
        {/* ici la partie ely normalement el route principale feha register dans le cs ou 3andek deja page princpale qui n'est pas le cas  */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private" element={<PrivateRoute />} />
        <Route path="/edit" element={<Write />} />
      </Routes>
    </div>
  );
}

export default App;
