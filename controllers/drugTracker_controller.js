var db = require("../models/drug.js");

module.exports = function(app) {
 

  // Create a new example
  app.post("/drugs", function(req, res) {
    db.drug_db.create(req.body).then(function(drug_db) {
      res.json(drug_db);
    });
  });
}