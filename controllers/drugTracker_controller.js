


var express = require("express");
var router = express.Router();

var db = require("../models/drug.js");


router.get("/", function(req, res){
  var hbsObjectOne;
  db.drugs.all(function(data){
    hbsObjectOne = {
      drugs: data
    };
    console.log(hbsObjectOne);
  });
    db.contacts.all(function(data){
      var hbsObjectTwo = {
        contacts: data
      };
      console.log(hbsObjectTwo);

    });
    res.render("index", hbsObjectOne);
 
});

// module.exports = function(app) {
 

//   // Create a new example
//   router.post("/", function(req, res) {
//     db.create(req.body).then(function(drug_db) {
//       res.json(drug_db);
//     });
//   });
// }

  
// })

module.exports = router;

