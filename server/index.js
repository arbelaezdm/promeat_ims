const express = require("express");
const routerUser = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(cors());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

//SESSION
// app.use(
//   session({
//     key: "userId",
//     secret: "user",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       //expires en 25H
//       expires: 60 * 60 * 24,
//     },
//   })
// );

//======== ROUTING ========;
//USERS ROUTES
app.use("/users", routerUser);

//ALL OTHER ROUTES THAT DOESNT EXIST
app.all("*", (req, res) => {
  res.send("That route doesn't exist");
});

const db = require("./models");
const userController = require("./controllers/userController");

db.sequelize.sync().then(() => {
  const port = 3050;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
