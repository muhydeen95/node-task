const express = require("express");
const Users = require("../models/user");

const router = express.Router();


router.get('/', (req, res) => {
    Users.find()
      // .sort({ createdAt: -1 })
      .then((result) => {
        res.send(result).json();
      })
      .catch((err) => {
        console.log(err);
      });
})
  
router.post('/create', (req, res) => {
    const user = new Users(req.body);
  
    user
    .save()
    .then((result) => {
      res.json({
        message:'Succesful', user });
    })
    .catch((err) => {
        res.send({message: err.message})
    });
  
})
  
  
router.put('/update/:id', (req, res) => {
      const id = req.params.id;
      const {name, email, country} = req.body.data;
      const updateUser = {
        // message: 'User created successfully',
        data: {
          name: name,
          email: email,
          country: country
        }
      };
      Users.findByIdAndUpdate(id, updateUser)
        .then(result => {
          res.send("Updated succesfully")
        })
        .catch((err) => {
          console.log(err);
    })
})
  
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
      Users.findByIdAndDelete(id)
          .then(result => {
              res.send("Deleted succesfully")
          })
          .catch((err) => {
              console.log(err);
          })
})

module.exports = router;
