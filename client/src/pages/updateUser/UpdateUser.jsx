import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";

const UpdateUser = () => {
  const [errors, setErrors] = useState({});

  const [user, setUser] = useState({});
  const [nombre, setNombre] = useState({});
  const [apellido, setApellido] = useState({});
  const [email, setEmail] = useState({});

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3050/update/" + id);
        // console.log(res.data[0]);
        setUser(res.data[0]);
        setNombre(res.data[0].nombre);
        setApellido(res.data[0].apellido);
        setEmail(res.data[0].email);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  //=========== HANDLE UPDATE =============
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3050/update/" + id, {
        nombre,
        apellido,
        email,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    // setErrors(validation(values));

    // //validation
    // if (errors) {
    //   console.log(errors);
    // } else {
    //   console.log("all its OK");
    //   //CREATE USER
    //   try {
    //     await axios.get('/users/test')
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  };
  //========================================================

  return (
    <div className="home__container">
      <h1>Update User</h1>
      {/* ====== FORM TO UPDATE USER ====== */}
      <form action="" className="login__container">
        {/* ====== NOMBRE INPUT ====== */}
        <input
          type="text"
          name="nombre"
          value={nombre}
          placeholder="Ingrese su Nombre"
          className="form__input"
          onChange={(e) => setNombre(e.target.value)}
        />
        {/* <div className="errors">
          {errors.nombre && <span>{errors.nombre}</span>}
        </div> */}

        {/* ====== APELLIDO INPUT ====== */}
        <input
          type="text"
          name="apellido"
          value={apellido}
          placeholder="Ingrese su Apellido"
          className="form__input"
          onChange={(e) => setApellido(e.target.value)}
        />
        {/* <div className="errors">
          {errors.apellido && <span>{errors.apellido}</span>}
        </div> */}

        {/* ====== EMAIL INPUT ====== */}
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Ingrese su Email"
          className="form__input"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <div className="errors">
          {errors.email && <span>{errors.email}</span>}
        </div> */}

        <button className="singup__button" onClick={handleSubmit}>
          Actualizar
        </button>
        <Link to={"/users"}>
          <button className="singup__button">Cancelar</button>
        </Link>
      </form>
    </div>
  );
};

export default UpdateUser;
