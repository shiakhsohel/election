// routes/index.js
// this is the userSearch functionality wale routes 

const express = require('express');
const router = express.Router();
const voterController = require('../src/v1/voter/controllers/voterController');

// searching ny Name 
router.get('/search/byName' ,voterController.searchByName )
// searching by phone number 
router.get('/search/byMobileNumber' , voterController.searchByphoneNumber  )
// search by Epic Number 
router.get('/search/byEpic' , voterController.searchByEpicNumber )
// search by universal 
router.get('/search/universal' , voterController.searchVoter)



module.exports = router;
