const express = require('express');
const router = express.Router();

router.use(express.json())

router.post('/login', (req, res) => {

    console.log(req.body)

    if(req.body.usermail == "kilian.jimenez@apiumhub.com" && req.body.password == "h4rdP4$$")

        res.json({"responseCode":200, "description": "Successful login !"});

    else

        res.json({"responseCode":403, "description": "Unauthorized !"});

});

module.exports = router;