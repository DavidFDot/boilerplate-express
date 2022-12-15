let express = require('express');
let app = express();
console.log("Hello World");

app.use(__dirname + '/public', express.static());

app.get('/',

    function (req, res) {

        absolutePath = __dirname + /views/index.html;
        res.sendFile(absolutePath);

    }

)































module.exports = app;
