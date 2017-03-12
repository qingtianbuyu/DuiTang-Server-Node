'use strict';
var AlbumModel = require('../models/album').AlbumModel;


module.exports = {
	create: function (callback){
		var albumModel = new AlbumModel({status:1, sender_id:1245});
		albumModel.save(function(err, row){
				
		});
	}
}