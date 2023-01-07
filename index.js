const http = require('http'), //HTTP server
    path = require('path'),
    express = require('express'), //Handling HTTP requests & routing
    fs = require('fs'), //File system functionalities

    router = express(), //Init our router

    server = http.createServer(router); //Init our server

router.use(express.static(path.resolve(__dirname, 'views')));
router.use(express.urlencoded({ extended: true }));
router.use(express.json());



server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
    const addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port)
});