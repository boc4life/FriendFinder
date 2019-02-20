let path = require("path")

module.exports = function(router) {

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname + "/../public/", "home.html"));
});
router.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname + "/../public/", "survey.html"))
});

}