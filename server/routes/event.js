// Dependencies
var mongoose        = require('mongoose');
var Event            = require('../models/event.js');


// Opens App Routes
module.exports = function(app) {

    // GET Routes
    // --------------------------------------------------------
    // Retrieve records for all users in the db
    app.get('/events', function(req, res){

        // Uses Mongoose schema to run the search (empty conditions)
        var query = Event.find({});
        query.exec(function(err, events){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            console.log(events);
            res.json(events);
        });
    });

    // POST Routes
    // --------------------------------------------------------
    // Provides method for saving new users in the db
    app.post('/events', function(req, res){

        // Creates a new User based on the Mongoose schema and the post bo.dy
        var newEvent = new Event(req.body);

        // New User is saved in the db.
        newEvent.save(function(err){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of the new user
            res.json(req.body);
        });
    });
};  