const express = require("express");
const Users = require("../models/user");

const router = express.Router();

router.get("/users", (req, res) => {
  Users.find()
    .then((result) => {
      res.send({ Users: result }).json();
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
});

router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then((result) => {
      res.send({ User: result }).json();
    })
    .catch((err) => {
      res.status(400).send({ message: "User not found" });
      console.log(err);
    });
});

router.post("/create", (req, res) => {
  const user = new Users(req.body);
  user
    .save()
    .then((result) => {
      res.json({
        message: "User created Suceesfully",
        data: result,
      });
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
});

router.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const { name, email, country } = req.body;
  const updateUser = {
    name: name,
    email: email,
    country: country,
  };
  Users.findById(id)
    .then((response) => {
      Object.entries(updateUser).forEach((val) => {
        updateUser[val[0]] === null || updateUser[val[0]] === ""
          ? (updateUser[val[0]] = response[val[0]])
          : "";
      });
      // console.log(updateUser);
      Users.findByIdAndUpdate(id, updateUser)
        .then((result) => {
          if (updateUser.name || updateUser.email || updateUser.country) {
            // console.log(result);
            res.send("Updated succesfully");
          }
        })
        .catch((err) => {
          res.status(404).send({ message: "User not updated" });
        });
    })
    .catch((err) => {
      res.status(400).json({messahe: 'User not found'})
    });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  Users.findByIdAndDelete(id)
    .then((result) => {
      res.send("Deleted succesfully");
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
});

module.exports = router;
