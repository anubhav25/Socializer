var express = require("express");
var User = require("../models/user");
var UserRequest = require("../models/user_request");
var Login = require("../models/login");
var passport = require("passport");
var image = require("./modules/image");
var upload = require("./modules/upload");
var thumb = require("node-thumbnail").thumb;

var app = express.Router();

/* function isLoggedin(req, res, next) {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}
 */

app.get("/isLoggedIn", (req, res) => {
  if (req.isAuthenticated()) {
    User.findById(req.user.userid, (err, user) => {
      if (err) {
        res.json({ message: false });
      } else {
        res.json({ message: true, user: user });
      }
    });
  } else {
    res.json({ message: false });
  }
});

app.post("/usernameValid", (req, res) => {
  //check of if the username is already available
  //if already exists send false
  //else send true
  User.find({ username: req.body.username }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data && data.length > 0) {
        res.json({ response: false });
      } else {
        UserRequest.find({ username: req.body.username }, (err, data1) => {
          if (err) {
            console.log(err);
          } else {
            if (data1 && data1.length > 0) {
              res.json({ response: false });
            } else {
              res.json({ response: true });
            }
          }
        });
      }
    }
  });
});
app.post("/emailValid", (req, res) => {
  //check of if the email is already available
  //if already exists send false
  //else send true
  User.find({ email: req.body.email }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data && data.length > 0) {
        res.json({ response: false });
      } else {
        UserRequest.find({ email: req.body.email }, (err, data1) => {
          if (err) {
            console.log(err);
          } else {
            if (data1 && data1.length > 0) {
              res.json({ response: false });
            } else {
              res.json({ response: true });
            }
          }
        });
      }
    }
  });
});

app.post("/phoneNoValid", (req, res) => {
  //check of if the email is already available
  //if already exists send false
  //else send true
  User.find({ phoneNo: req.body.phoneNo }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data && data.length > 0) {
        res.json({ response: false });
      } else {
        UserRequest.find({ phoneNo: req.body.phoneNo }, (err, data1) => {
          if (err) {
            console.log(err);
          } else {
            if (data1 && data1.length > 0) {
              res.json({ response: false });
            } else {
              res.json({ response: true });
            }
          }
        });
      }
    }
  });
});

app.post("/changePassword", (req, res) => {
  Login.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      res.json({ response: "fail", message: err.message });
    } else if (!user) {
      res.json({ response: "fail", message: "username does not exists" });
    } else {
      user.changePassword(
        req.body.oldpassword,
        req.body.newpassword,
        (err, newuser) => {
          if (err) {
            res.json({ response: "fail", message: err.message });
          } else {
            res.json({ response: "success" });
          }
        }
      );
    }
  });
});

app.post("/register", (req, res) => {
  var nameOfFile = "anubhav-" + Date.now();
  upload("file", nameOfFile, "profilePictures", req, res, function(err) {
    if (err) {
      res.json({ response: "fail" });
      console.log(err);
    } else {
      if (req.file) {
        if (parseInt(req.body.rotation) > 0) {
          image.rotate(req.file.path, req.body.rotation);
        } else {
          image.compress(req.file.path);
        }
        console.log(req.file);
        thumb(
          {
            source: req.file.path,
            destination:
              "C:\\Users\\ANUBHAV\\Desktop\\New folder\\Angular\\Socializer\\src\\assets\\thumbnails\\",
            concurrency: 1,
            basename: nameOfFile,
            suffix: "",
            width: 300
          },
          function(files, err, stdout, stderr) {
            console.log(files);
          }
        );
        delete req.body.rotation;
      } else {
        req.body.imglink = "/assets/profilePictures/default.png";
      }
      req.body.thumbnail = req.body.imglink.replace(
        "profilePictures",
        "thumbnails"
      );
      let user = new UserRequest(req.body);
      user.save((err, user) => {
        if (err) {
          console.log(err);
          res.json({ response: "fail" });
        } else {
          res.json({ response: "success" });
        }
      });
    }
  });
});

app.get("/search/:query", (req, res) => {
  var myquery = req.params.query;
  myquery = ".*" + myquery + ".*";
  var regex = new RegExp(myquery, "i");
  console.log(regex);
  var query = User.find({ username: regex }, { username: 1 }).limit(20);
  query.exec(function(err, users) {
    if (!err) {
      var query = UserRequest.find(
        { username: regex },
        { username: 1, thumbnail: 1 }
      ).limit(5);
      query.exec(function(err, users2) {
        if (!err) {
          res.json(users.concat(users2));
        } else {
          res.json(err);
        }
      });
    } else {
      res.json(err);
    }
  });
});

app.get("/user/:username", (req, res) => {
  var query = User.findOne({ username: req.params.username }, (err, user) => {
    if (err) {
      res.json(err);
    } else {
      if (!user) {
        var query = UserRequest.findOne(
          { username: req.params.username },
          (err, users2) => {
            if (!err) {
              res.json(users2);
            } else {
              res.json(err);
            }
          }
        );
      } else {
        res.json(user);
      }
    }
  });
});

app.post("/login", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({ response: "fail", message: info.message });
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.json({
        response: "success",
        path: "/home",
        user: { username: user.username, _id: user._id }
      });
    });
  })(req, res, next);
});

app.get("/logout", (req, res) => {
  req.logout();
});

module.exports = app;
