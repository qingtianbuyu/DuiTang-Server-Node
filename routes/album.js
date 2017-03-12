var express = require('express')
var router  = express.Router();


var albumService = require('../service/albumService');

router.get('/album/create', (req, res, next) => {
	 res.send(albumService.create())
});


module.exports = router