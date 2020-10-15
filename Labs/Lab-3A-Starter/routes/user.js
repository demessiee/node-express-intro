const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const jwtPrivateKey = "myprivatekey" 
const json = require('../public/employee_data.json')
const User = require('../models/user.js')

const router = express.Router()

router.use(express.json()); 

router.get('/users', async (req, res) => {
  let result = await User.find().select('username')
  res.json(result)
})

router.post('/login',(req, res) => {

    User.findOne({username: req.body.username}, function(err,result) { 
        if(err)
            throw new Error("")
        if(result === null)
            res.send("Invalid login credentials")
        else{
            bcrypt.compare(req.body.password, result.password, function(err, result) {
                if(result === true){
                  res.json({
                    token: jwt.sign({ username: req.body.username }, jwtPrivateKey)
                  });
                }else{
                  res.send("invalid login credentials")
                }
            });
        }
        
    });


    
})

router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if(err)
          throw new Error(err)

        let user = new User({
          username:req.body.username,
          password: hash
        })
        let result = await user.save()
        res.send("Successfully Logged In!") //dont send password hash back to the client
    });

})


module.exports = router