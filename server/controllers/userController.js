require("dotenv").config();
const bcryptjs = require("bcryptjs");
const { Users } = require("../models");

const userController = {
  //================== HOME PAGE ==================
  home: (req, res) => {
    const hashPassword = bcryptjs.hashSync(req.body.password, 10);
    const hashconfirmarPassword = bcryptjs.hashSync(
      req.body.confirmarPassword,
      10
    );
  },

  //================ ADD USER TO DB ==========================
  addUser: async (req, res) => {
    const user = req.body;

    //PASSWORDS ENCRYPTATION
    const hashPassword = bcryptjs.hashSync(req.body.password, 10);
    const hashconfirmPassword = bcryptjs.hashSync(req.body.confirmPassword, 10);
    console.log(hashPassword, hashconfirmPassword);

    //STORING USER IN DB
    await Users.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPassword,
      confirmPassword: hashconfirmPassword,
      userCategory: req.body.userCategory,
    });
    res.json(user);
  },

  //============= FIND USER TO EDIT ====================
  editUser: (req, res) => {
    // const userId = req.params.id;
    // const q = "SELECT * FROM usuarios WHERE id = ?";
    // db.query(q, [userId], (err, data) => {
    //   if (err) return res.json(err);
    //   return res.json(data);
    // });
  },

  //======== UPDATE USER IN DB ==============
  updateUser: async (req, res) => {
    const users = await db.findAll();
    res.json(users);
  },

  //====== DELETE USER IN DB ==============
  deleteUser: (req, res) => {},

  //======= FIND ALL USERS ================
  findAllUsers: async (req, res) => {
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
  },

  //================ LOGIN ======================
  //Session
  loginSession: (req, res) => {
    // if (req.session.user) {
    //   res.send({ loggedIn: true, user: req.session.user });
    // } else {
    //   res.send({ loggedIn: false });
    // }
  },

  login: (req, res) => {
    // const { email, password } = req.body;
    // const q = "SELECT * FROM usuarios WHERE email = ?";
    // db.query(q, [email], (err, data) => {
    //   if (err) {
    //     return res.json(err);
    //   } else {
    //     // PASSWORD CHECK
    //     if (data.length > 0) {
    //       bcryptjs.compare(password[0], data[0].password, (error, response) => {
    //         if (response) {
    //           req.session.user = data;
    //           console.log("session data");
    //           console.log(req.session.user);
    //           return res.json(data);
    //         } else {
    //           console.log(data);
    //           return res.json("Password incorrecto");
    //         }
    //       });
    //     } else {
    //       res.json("El usuario no existe");
    //     }
    //   }
    // });
  },

  //====== TEST =====
  test: (req, res) => {
    res.json("testing API");
  },
};

module.exports = userController;
