import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  ]);

  //FETCHING ALL USERS
  useEffect(() => {
    console.log("fetching users");
    axios.get("http://localhost:3050/users/allusers").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  //=== HANDLE INPUT ===
  const handleInput = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  //=== HANDLE SUBMIT ===
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //=== HANDLE PASSWORD ===
  const handlePassword = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  //===  HANDLE LOGIN ===
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3050/login", user);
      if (res) {
        console.log(res.data);
        navigate("/users");
      } else {
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home__container">
      <div>
        <h1>IMS PROMEAT</h1>
      </div>
      <form action="" onSubmit={handleSubmit} className="login__container">
        {/* ====== EMAIL INPUT ====== */}
        <input
          type="email"
          name="email"
          placeholder="Ingrese su Email"
          className="form__input"
          onChange={handleInput}
        />
        <div className="errors">
          {/* {errors.email && <span>{errors.email}</span>} */}
        </div>

        {/* ====== PASSWORD INPUT ====== */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form__input"
          onChange={handlePassword}
        />
        <div className="errors">
          {/* {errors.password && <span>{errors.password}</span>} */}
        </div>

        {/* LOGIN BUTTON */}
        <button onClick={handleLogin} className="login__button">
          Login
        </button>

        {/* SINGUP */}
        <p>No tienes una cuenta? Regitrate para crear una cuenta</p>
        <Link to={"/user/register"}>
          <button className="singup__button">Registrarme</button>
        </Link>
      </form>
      {/* <div>
        {users.map((user) => (
          <div className="user" key={user.id}>
            <h2>{user.firstName}</h2>
            <h2>{user.lastName}</h2>
            <h2>{user.email}</h2>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Home;
