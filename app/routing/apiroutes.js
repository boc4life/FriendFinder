let path = require("path")
let friends = require("./../data/friends")

module.exports = function(router) {

router.get('/api/friends', function(req, res){
    res.json(friends)
});
router.post('/api/friends', function(req, res){
    let newFriend = req.body;
    let scoreArr = newFriend.scores;
    let newScore = scoreArr.reduce(add);
    console.log(newScore)
    newScore = Math.abs(newScore);
    let resultsArr = [];
    for (let i = 0; i < friends.length; i++) {
        let sum = friends[i].scores;
        let value = sum.reduce(add);
        value = Math.abs(value);
        resultsArr.push(value)
    }
    let indexOf;
    let difference = 51;
    for (let j = 0; j < resultsArr.length; j++) {
        let newDiff = resultsArr[j] - newScore;
        console.log(newDiff)
        if (newDiff < difference) {
            difference = newDiff;
            indexOf = j
        }
    }
    console.log(difference, indexOf)
    // res.sendFile(path.join(__dirname + "/../public/", "survey.html"))
    friends.push(newFriend);
});
}

function add(a, b) {
    return a + b
}