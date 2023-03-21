const ContactSchema = require("../Models/Contact");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//signup
exports.register = async (req, res) => {
  try {
    const { name, pseudo, age, government, address, email, password, blogs } = req.body;
    const found = await ContactSchema.findOne({ email });
    if (found) {
      return res.status(400).json({ errors })
    }
    const newUser = await new ContactSchema(req.body);
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    newUser.password = hash;
    const payload = { id: newUser._id };
    var token = jwt.sign(payload, process.env.privateKey);
    newUser.save();
    res.status(200).send({ newUser, token, msg: "welcome to the family" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "it error", err });
  }
};

//login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const found = await ContactSchema.findOne({ email });
    if (!found) {
      return res.status(400).json({ errors });
    }
    const match = await bcrypt.compare(password, found.password);
    if (!match) {
      return res.status(400).json({ errors });
    }
    const payload = { id: found._id };
    var token = jwt.sign(payload, process.env.privateKey);
    res.status(200).json({ msg: "done you are welcome", token, found });
  } catch (err) {
    res.send({ msg: "problem", err })
  }
};

//get a user
exports.getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await ContactSchema.findById(id);
      res.send({ msg: "you did it", user });
    } catch (error) {
      res.send({ msg:"error" });
  }
};

//add a user
exports.addUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await ContactSchema.findById(id);

    if (user) {
      const { password, ...otherDetails } = user._doc;

      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such user exists");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a user
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }

      const user = await ContactSchema.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! you can only update your own profile");
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId, currentUserAdminStatus } = req.body;

  if (currentUserId === id || currentUserAdminStatus) {
    try {
      await ContactSchema.findByIdAndDelete(id);
      res.status(200).json("User deleted successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! you can only delete your own profile");
  }
};
