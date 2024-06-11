import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SingupValidation } from "../../Validations/SingupValidation";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import "../singup/singup.css";

//USING FORMIK
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  userCategory: "",
};

const Singup = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      userCategory: "",
    },
  ]);
  const onSubmit = (data, { resetForm }) => {
    axios.post("http://localhost:3050/users/register", data).then((data) => {
      console.log(data);
      console.log("submiting");
      alert(`${data.firstName} te has registrado exitosamente!!!`);
      resetForm({ data: " " });
      navigate("/");
    });
  };

  //FETCHING ALL USERS
  useEffect(() => {
    console.log("fetching users");
    axios.get("http://localhost:3050/users/allusers").then((response) => {
      setUsers(response.data);
      console.log(users);
    });
  }, []);
  //=================================================

  return (
    <div className="home__container">
      <div>
        <h1>IMS PROMEAT</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={SingupValidation}
        onSubmit={onSubmit}
      >
        {({ errors }) => (
          <Form action="" className="login__container">
            {/* ====== FIRST NAME INPUT ====== */}
            <Field
              type="text"
              autoComplete="off"
              name="firstName"
              placeholder="Ingrese su Nombre"
              className="form__input"
            />
            <div className="errors">
              {errors.firstName && <span>{errors.firstName}</span>}
            </div>

            {/* ====== LAST NAME INPUT ====== */}
            <Field
              type="text"
              autoComplete="off"
              name="lastName"
              placeholder="Ingrese su Apellido"
              className="form__input"
            />
            <div className="errors">
              {errors.lastName && <span>{errors.lastName}</span>}
            </div>

            {/* ====== EMAIL INPUT ====== */}
            <Field
              type="email"
              autoComplete="off"
              name="email"
              placeholder="Ingrese su Email"
              className="form__input"
            />
            <div className="errors">
              {errors.email && <span>{errors.email}</span>}
            </div>

            {/* ====== PASSWORD INPUT ====== */}
            <Field
              type="password"
              autoComplete="off"
              name="password"
              placeholder="Password"
              className="form__input"
            />
            <div className="errors">
              {errors.password && <span>{errors.password}</span>}
            </div>

            {/* ====== PASSWORD CONFIRMATION INPUT ====== */}
            <Field
              type="password"
              autoComplete="off"
              name="confirmPassword"
              placeholder="Confirmar Password"
              className="form__input"
            />
            <div className="errors">
              {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            </div>

            <label className="user__option">
              Selecciona si eres usuario o administrador
            </label>
            <label>
              <Field type="radio" name="userCategory" value="user" />
              Usuario
            </label>

            <label>
              <Field type="radio" name="userCategory" value="admin" />
              Administrador
            </label>

            <div className="errors">
              {errors.userCategory && <span>{errors.userCategory}</span>}
            </div>

            <button className="singup__button" type="submit">
              Registrarme
            </button>
            <Link to={"/"}>
              <button className="singup__button">Home</button>
            </Link>
            <div></div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Singup;
