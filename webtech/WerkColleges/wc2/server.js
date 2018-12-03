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
// serve static files if available
// use body-parser to parse parameters in the body of POST requests
var app = express();
// serve static files if available

// 3. Log each request received by the server
app.use(function(req, res, next) {
	console.log('[LOG] %s\t%s\t%s\t%s', new Date().toISOString(), req.connection.remoteAddress,
		req.method, req.url);
	next(); // call on to next component
});

// 16. Check for the cookie in the request. If there is one, it identifies the user.
// If there is not, create a new userId and set the cookie to identify him/her

// 7. and 8. Get list of suggestions
app.get("/suggestions/", function(req, res){
    var userId = 2;

    var result = [];
    suggestions.forEach(function(s) {
        var r = {nick: s.nick, message: s.message, voteCount: s.voters.length,
        owner: (s.userId == userId), voted: (s.voters.indexOf(userId) > -1)};

        result.push(r);
    });


    res.json(result);

    //for (var i = 0; i<suggestions.length; i++) {
      //  if(suggestions[i].userId === 2) {
      //      res.json(suggesstions[i]);
       // }
    //}
    //res.json(suggestions);  //send back suggestions in json format
});

// 14. Post a new suggestion

// 10. and 18. Upvote a suggestion

// 11. and 18. Downvote a suggestion

// 2. Create HTTP server and listen

http.createServer(app).listen(3000, function() {
	console.log("# Listening to port 3000...");
});

