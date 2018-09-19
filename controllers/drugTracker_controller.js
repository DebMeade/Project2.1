var express = require("express");
var router = express.Router();

var db = require("../models/drug.js");

module.exports = function(app) {
 

  // Create a new example
  router.post("/", function(req, res) {
    db.create(req.body).then(function(drug_db) {
      res.json(drug_db);
    });
  });
}

router.get("/drugList", function(req, res) {
  res.render("index");
  
})

module.exports = router;

var express = require("express");
var router = express.Router();

var db = require("../models/drug.js");


router.get("/", function(req, res){
  db.all(function(data){
    var hbsObject = {
      drugs: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


// module.exports = function(app) {
 

//   // Create a new example
//   router.post("/", function(req, res) {
//     db.create(req.body).then(function(drug_db) {
//       res.json(drug_db);
//     });
//   });
// }

// router.get("/drugList", function(req, res) {
//   res.render("index");
  
// })

module.exports = router;

