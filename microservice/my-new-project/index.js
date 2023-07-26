const express = require("express"); // call "express" library
const fs = require("fs"); // can use filesystem API in Node.js
const path = require("path");

const app = express(); // define express app instance
const port = 3000;


app.get("/video", (req, res) => {
    
    const videoPath = path.join("./videos", "SampleVideo_1280x720_1mb.mp4");
    fs.stat(videoPath, (err, stats) => {
	if (err) {
	    console.error("An error occurred ");
	    res.sendStatus(500);
	    return;
	}

	res.writeHead(200, {
	    "Content-Length": stats.size,
	    "Content-Type": "video/mp4",
	});
	fs.createReadStream(videoPath).pipe(res);

    });

})



app.listen(PORT, () => {
    console.log(`Microservice listening on port ${PORT}, point your browser at http://localhost:3000/video`);
}); 
