import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Singup from "./pages/singup/Singup";
import Users from "./pages/users/Users";
import UpdateUser from "./pages/updateUser/UpdateUser";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/user/register" exact Component={Singup} />
          <Route path="/users" exact Component={Users} />
          <Route path="/update/:id" exact Component={UpdateUser} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
