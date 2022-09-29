const express = require('express');
const router = express.Router();

router.use(express.json())

router.post('/login', (req, res) => {

    console.log(req.body)

    if(req.body.usermail == "kilian.jimenez@apiumhub.com" && req.body.password == "h4rdP4$$")

        res.status(200).json({"message":"Success", "description": "Successful login."});

    else

        res.status(403).json({"message": "Unauthorized", "description": "Invalid password for the specified user or user account doesn't exists."});

});

module.exports = router;