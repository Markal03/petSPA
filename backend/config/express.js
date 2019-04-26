const bodyParser= require('body-parser');
const cors = require('cors');
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});


module.exports = function(app) {
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());  
    app.disable('x-powered-by');
    app.use(limiter);
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET', 'POST','DELETE, PUT');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token");
        next();
    });
}