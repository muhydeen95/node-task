const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const Users = require("./models/user");

const app = express();

app.use(morgan("dev"));

app.use(cors());

app.use(bodyParser.json());

const dbURI = 'mongodb+srv://ZuriTeam:test1234@nodetuts.vkko6.mongodb.net/Zuri-App?retryWrites=true&w=majority';
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })


app.get('/users', (req, res) => {
  Users.find()
    // .sort({ createdAt: -1 })
    .then((result) => {
      res.send(result).json();
    })
    .catch((err) => {
      console.log(err);
    });
})

app.post('/create', (req, res) => {
  const user = new Users(req.body);

  user
  .save()
  .then((result) => {
    res.json(user);
  })
  .catch((err) => {
    console.log(err);
  });

})


app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    // const {name, email, country} = req.body;
    // const updateUser = {
    //   // message: 'User created successfully',
    //   data: {
    //     name: req.body.name,
    //     email: req.body.email,
    //     country: req.body.country
    //   }
    // };
    Users.findByIdAndUpdate(id, {
      data: {
        name: req.body.data.name,
        email: req.body.data.email,
        country: req.body.data.country
      }
    })
      .then(result => {
        res.send("Updated succesfully")
        console.log(req.body);
      })
      .catch((err) => {
        console.log(err);
  })
})

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
    Users.findByIdAndDelete(id)
        .then(result => {
            res.send("Deleted succesfully")
        })
        .catch((err) => {
            console.log(err);
        })
})

const PORT = 3000;

app.listen(process.env.PORT || PORT, () => {
  console.log(`App running on port ${PORT}`);
})

