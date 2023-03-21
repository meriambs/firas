const express = require("express");
const ContactSchema = require("../Models/Contact");
const { register, login, getUser, addUser, updateUser, deleteUser } = require("../Controllers/Contact");
const { loginValidator, registerValidator, validation } = require("../Middleware/RegisterValidation");
const { isAuth } = require("../Middleware/isAuth");

const ContactRouter = express.Router();
//post for register
ContactRouter.post("/register", register, registerValidator, validation);

//post for login
ContactRouter.post("/login", login)

//get route
//ContactRouter.get("/getall", getUser);
ContactRouter.get("/getall", getUser, (req, res) => {
    try {
        const newUser = new ContactSchema(req.body)
        newUser.save();
        res.send({ msg: "you did it" });
    } catch (err) {
        res.send({ msg: "something wrong", err });
    }
}),
//get unique user 
ContactRouter.get('/uraccount',isAuth,(req,res)=>{
    res.send(req.user)
})
//put route
ContactRouter.put("/updateuser/:id", updateUser);

//delete route
ContactRouter.delete("/deleteuser/:id", deleteUser);

//get by id route
ContactRouter.get("/getuser/:id", getUser);

module.exports = ContactRouter;
