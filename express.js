var express = require('express');
var path = require('path');

let app = express();

let router = express.Router();
 
// serve angular front end files from root path
let baseRoute = router.use('/', express.static('app', { redirect: false }));
let returnIndex = function (req, res, next) {
    res.sendFile('index.html', { root: path.join(__dirname, './app') })
}
baseRoute.get("/*", returnIndex);

app.use("/", router);

app.listen(process.env.PORT || 7000);