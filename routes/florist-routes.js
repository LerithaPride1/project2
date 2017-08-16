// *********************************************************************************
// florist-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************


// Requiring our Florist model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the florist
  app.get("/api/florist/", function(req, res) {
    db.Florist.findAll({})
    .then(function(dbFlorist) {
      res.json(dbFlorist);
    });
  });

  // Get route for returning florist of a specific description
  app.get("/api/florist/description/:description", function(req, res) {
    db.Florist.findAll({
      where: {
        description: req.params.description
      }
    })
    .then(function(dbFlorist) {
      res.json(dbFlorist);
    });
  });

  // Get rotue for retrieving a single Florist
  app.get("/api/florist/:id", function(req, res) {
    db.Florist.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbFlorist) {
      res.json(dbFlorist);
    });
  });

  // Florist route for saving a new Florist
  app.post("/api/florist", function(req, res) {
    console.log(req.body);
    db.Florist.create({
      company: 'ABC',
      email: 'ABC@email.com',
      phone: 1234,
      description: 'description',
      price: 123
    })
    .then(function(dbFlorist) {
      res.json(dbFlorist);
    });
  });

  // DELETE route for deleting florist
  app.delete("/api/florist/:id", function(req, res) {
    db.Florist.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbFlorist) {
      res.json(dbFlorist);
    });
  });

  // PUT route for updating florist
  app.put("/api/florist", function(req, res) {
    db.Florist.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbFlorist) {
      res.json(dbFlorist);
    });
  });
};
