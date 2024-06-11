import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./users.css";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3050/allusers");
        setUsers(res.data);
        // console.log(users)
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUsers();
  }, []);

  //===== HANDLE DELETE ==============
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete("http://localhost:3050/delete/" + id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>All Users</h1>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <div className="main__container"></div>
    </>
  );
};

export default Users;
