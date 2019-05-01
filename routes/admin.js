var express = require("express");
var User = require("../models/user");
var UserRequest = require("../models/user_request");
var Login = require("../models/login");
var sendMail = require("./modules/email");
var passport = require("passport");

var app = express.Router();
app.get("/isLoggedIn", (req, res) => {
  if (req.isAuthenticated()) {
    User.findById(req.user.userid, (err, user) => {
      if (err) {
        res.json({ message: false });
      } else {
        console.log(user);
        if (user.admin) {
          console.log(user);
          res.json({ message: true, user: user });
        } else {
          res.json({ message: false });
        }
      }
    });
  } else {
    res.json({ message: false });
  }
});
app.get("/userRequests", (req, res) => {
  UserRequest.find({})
    .limit(20)
    .exec((err, data) => {
      if (err) {
        res.json([]);
      } else {
        res.json(data);
      }
    });
});

function gernatePassword() {
  let pwd = "";
  let a = "abcdefghijklmnopqrstuvwxyz1234657890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 6; i++) {
    pwd += a.charAt(Math.random() * a.length);
  }
  return pwd;
}

app.post("/acceptUser", (req, res) => {
  UserRequest.findOne({ username: req.body.username }, (err, data) => {
    if (err) {
      res.json({ response: "fail" });
    } else {
      var tmpUser = {
        username: data.username,
        email: data.email,
        phoneNo: data.phoneNo,
        fullname: data.fullname,
        dob: data.dob,
        gender: data.gender,
        imglink: data.imglink,
        thumbnail: data.thumbnail
      };
      if (data.description) {
        tmpUser.description = data.description;
      }
      var myuser = new User(tmpUser);
      myuser.save((err, dbuser) => {
        if (err) {
          console.log(err);
          res.json({ response: "fail" });
        } else {
          UserRequest.remove({ username: dbuser.username }, err => {
            if (err) {
              res.json({ response: "fail" });
            } else {
              res.json({ response: "success" });
              var pwd = gernatePassword();
              Login.register(
                new Login({
                  username: dbuser.username,
                  email: dbuser.email,
                  userid: dbuser._id
                }),
                pwd,
                (err, loginuser) => {
                  if (err) {
                    console.log(err);
                    res.json({ response: "fail" });
                  } else {
                    sendMail(
                      "registration successful",
                      `<html><body>
                                    <h4>Congratulations!, Your Socializer account was accepted by the admin.</h4>
                                    <h4>Your login details are : </h4>
                                    <h3>Username :  ${loginuser.username}</h3>
                                    <h3>Password :  ${pwd}</h3>
                                    <h4><a href='https://mysocializer.herokuapp.com/login'>Click here to login</a></h4>
                                    <h4><a href='https://mysocializer.herokuapp.com/changepassword'>Click here to change password</a></h4>

                                   </body> </html>`,
                      loginuser.email
                    );
                    console.log(pwd);
                    passport.authenticate("local")(req, res, () => {
                      res.json({ response: "success" });
                    });
                  }
                }
              );
            }
          });
        }
      });
    }
  });
});

app.post("/rejectUser", (req, res) => {
  UserRequest.remove({ username: req.body.username }, err => {
    if (err) {
      res.json({ response: "fail" });
    } else {
      res.json({ response: "success" });
    }
  });
});
// Login.register(
//   new Login({
//     username: "anubhav",
//     email: "anubhav@gmail.com",
//     userid: "5a9131ff1f7f4f0014b936d8"
//   }),
//   "anubhav",
//   (err, loginuser) => {
//     Login.find({}, (e, u) => {
//       console.log(u);
//     });
//   }
// );

module.exports = app;
