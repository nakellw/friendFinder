// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friendData");
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

 
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    console.log(req);
    console.log(friendData);
      friendData.push(req.body);
      res.json(true);
  });

  app.post("/api/friends", function(req, res) {
    // console.log(res);
    var newFriend = req.body;
    var newFriendScores=newFriend.scores;
    var totalDifference =0;
    var allDifferences = []; 
    for(var i=0;i<friendsData.length;i++){
      console.log(friendsData[i].name);
    //	totalDifference = 0;
    // We then loop through all the scores of each friend
    for (var j=0; j<10; j++){
      // this adds the numerical answers of each friend to the total difference; then uses the absolute value to determine the difference between the two (absolute value is used so that 5-3 and 3-5 both equal 2)
      totalDifference += Math.abs(friendsData[i].scores[j] - newFriend.scores[j]);
    }
    
    // each total difference, for each potential friend, is pushed into the allDifferences array 
    allDifferences.push(totalDifference);
    // total difference is reset back to zero
    totalDifference = 0;
    }
    
    //best match will give the smallest values 
    var bestMatch = friendsData[allDifferences.indexOf(Math.min.apply(null, allDifferences))];
    
    res.send(bestMatch);
    console.log(bestMatch);
    // newFriend.push(friends);
    });
    };
