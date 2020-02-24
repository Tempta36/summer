var url = require("url"),
    fs = require("fs"),
    http = require("http"),
    path = require("path");
http.createServer(function (req, res) {
    // console.log('req.url= ' + req.url);
    var pathname = __dirname + '/dist/' + url.parse(req.url).pathname;
    // console.log('pathname= ' + pathname);
    if (path.extname(pathname) == "") {
        pathname += "/";
        // console.log('pathname= ' + pathname);
    }
    if (pathname.charAt(pathname.length - 1) == "/") {
        pathname += "/index.html";
        // console.log('pathname= ' + pathname);
    }

    // console.log('__dirname= ' + __dirname);
    console.log('pathname= ' + pathname);
    fs.exists(pathname, function (exists) {
        if (exists) {
            switch (path.extname(pathname)) {
                case ".html":
                    res.writeHead(200, { "Content-Type": "text/html" });
                    break;
                case ".js":
                    res.writeHead(200, { "Content-Type": "text/javascript" });
                    break;
                case ".css":
                    res.writeHead(200, { "Content-Type": "text/css" });
                    break;
                case ".gif":
                    res.writeHead(200, { "Content-Type": "image/gif" });
                    break;
                case ".jpg":
                    res.writeHead(200, { "Content-Type": "image/jpeg" });
                    break;
                case ".png":
                    res.writeHead(200, { "Content-Type": "image/png" });
                    break;
                default:
                    res.writeHead(200, { "Content-Type": "application/octet-stream" });
            }

            fs.readFile(pathname, function (err, data) {
                // console.log(data);
                res.end(data);
            });
        } else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 Not Found</h1>");
        }
    });
}).listen(3000);
