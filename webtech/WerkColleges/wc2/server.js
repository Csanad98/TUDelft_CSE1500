const express = require("express");
const http = require("http");
const cookies = require("cookie-parser");
const bodyParser = require("body-parser");



// 4. and 5. Data structures to support the application
var suggestions = [
	{ userId: 1, nick: "Alice", message: "Larger food portions", voters: [3, 2] },
	{ userId: 1, nick: "Alice", message: "Better coffee at work", voters: [] },
	{ userId: 2, nick: "Bob", message: "Disable motion sensors", voters: [1] }
];
    



// 6. Count current number of users to identify them
var usersCount = 3;

// 2. Create Express server
var app = express();
// serve static files if available 
//- used to serve static files such as images, CSS files, and JavaScript files
app.use(express.static(__dirname + "/client"));

// 3. Log each request received by the server
app.use(function(req, res, next) {
	console.log('[LOG] %s\t%s\t%s\t%s', new Date().toISOString(), req.connection.remoteAddress,
		req.method, req.url);
	next(); // call on to next component
});

// 16. Check for the cookie in the request. If there is one, it identifies the user.
// If there is not, create a new userId and set the cookie to identify him/her
app.use(cookies("mysecret")); // this will encrypt cookies to avoid users tampering with them
app.use(function(req, res, next){
	var userId = req.signedCookies.userId;
	if (userId === undefined) { //no cookie
		userId = ++usersCount;

		console.log("# Setting new cookie for user " + userId);
		res.cookie("userId", userId, {signed: true, httpOnly: true});


	}

	req.userId = parseInt(userId); // store the parsed userId for the next components
	next(); // call on the next component



});


// 7. and 8. Get list of suggestions
app.get("/suggestions/", function(req, res) {
    var userId = req.userId;
    // process list of suggestions, counting upvotes and checking whether this user is the owner
    var result = [];
    for(var i = 0; i < suggestions.length; i++) {
        var s = suggestions[i];
        var r = { nick: s.nick, message: s.message, voteCount: s.voters.length };
        r.voted = s.voters.indexOf(userId) >= 0; // upvoted by this user?
        r.owner = s.userId === userId; // owner?
        result.push(r);
    }
    //console.log(suggestions); // to debug
    res.json(result);
});

// 14. Post a new suggestion
// use body-parser to parse parameters in the body of POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/suggestions/", function(req, res){
	var message = req.body.message;
	var nick = req.body.nick;
	var userId = req.userId;

	var s = {userId: userId, nick: nick, message: message, voters: []};
	suggestions.push(s);

	console.log("# Post '" +message + "' by '" + nick + "' ("+userId+")");
	res.end("ok");

});



// 10. and 18. Upvote a suggestion
app.post("/votes/:suggestion", function(req, res) {
	var sugId = req.params.suggestion; //suggesition id is encoded in url path 
	// the : spcifies that there is a parameter
	var userId = req.userId;
	var log = "# Upvoting " + sugId + " by "+userId + "...";

	var sug = suggestions[sugId];
	var i = sug.voters.indexOf(userId);
	sug.voters.push(userId);

	console.log(log + "success");
	res.send("ok");

	
});

// 11. and 18. Downvote a suggestion
app.delete("/votes/:suggestion", function(req, res) {
    var sugId = req.params.suggestion; // suggestion id is encoded in the url path
    var userId = req.userId;
    var log = "# Downvoting " + sugId + " by " + userId + "...";

    var sug = suggestions[sugId];
    var i = sug.voters.indexOf(userId);
    sug.voters.splice(i, 1);

    console.log(log + "success");
     res.end("ok");
});

// 2. Create HTTP server and listen
http.createServer(app).listen(3000, function() {
	console.log("# Listening to port 3000...");
});

