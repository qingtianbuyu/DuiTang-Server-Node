var express = require('express')
var router  = express.Router();


var albumController = require('../service/albumService');

router.get('/album/create', (req, res, next) => {
	 res.send(albumController.create('ok'))
});

module.exports = router