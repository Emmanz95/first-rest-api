// dependenices
const express = require('express');
const router = express.Router();

// routes
router.get('/',(request, response)=>{
    response.send('<h1>Hello from router delete.js</h1>')
});

// exporting the contents of this file
module.exports = router;