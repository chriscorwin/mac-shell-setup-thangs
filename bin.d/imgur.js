#!/usr/bin/env node

var imgur = require('/usr/local/lib/node_modules/imgur');

imgur.setClientId('5eabace39ce9546');

imgur.setCredentials('chris.corwin@gmail.com', '6Q6-NQM-r32-k3v', '5eabace39ce9546');
var imagesPath = '/Volumes/OWC Mercury Elite AL Pro/Documents/Pictures/upload';

		// // Multiple image types from home folder
		// imgur.uploadFile('~/*.(jpg|png|gif)')
		//     .then(function(json) {
		//         console.log(json.data.link);
		//     })
		//     .catch(function (err) {
		//         console.error(err.message);
		//     });

imgur.createAlbum()
    .then(function(json) {
        console.log(json);

        var returnJSON = json;
		// All jpegs in a specific folder
		// to an album you own
		// var albumId = 'F8KTV';
		var albumId = returnJSON.data.id;
		imgur.uploadFile(imagesPath + '/*.jpg', albumId)
		    .then(function (json) {
		        console.log(json.data.link);
		    })
		    .catch(function (err) {
		        console.error(err.message);
		    });

    })
    .catch(function (err) {
        console.error(err.message);
    });

// // Include http(s) when specifying URLs
// imgur.uploadUrl('https://octodex.github.com/images/topguntocat.png')
//     .then(function (json) {
//         console.log(json.data.link);
//     })
//     .catch(function (err) {
//         console.error(err.message);
//     });


// imgur.uploadAlbum(images, uploadType /*, failSafe */)
//     .then(function(album) {
//         console.log(album.data, album.images);
//     })
//     .catch(function (err) {
//         console.error(err.message);
//     });