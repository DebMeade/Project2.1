


var express = require("express");
var router = express.Router();

var db = require("../models/drug.js");


router.get("/", function(req, res){
  db.drugs.all(function(data){
    var hbsObject = {
      drugs: data.map(  function(drug) {
        if(drug.currentQty > 10){
          drug.currentQty = {value: drug.currentQty, isOver10: true};
        } else {
          drug.currentQty = {value: drug.currentQty, isOver10: false};
        }
        return drug;
      })
    };
    console.log(hbsObject.drugs[0]);
    res.render("index", hbsObject);
  });
});

router.post("/drugList", function(req, res){
  db.create([
    "ndcNum", "rxNum", "drugName", "drugForm", "drugFormSize", "drugFormMeasure", "bottleFullQty", "bottlePartialQty",
    "rxRefills",
    "rxWritten",
    "rxDiscard",
    "rxReorder",
    "drugDose",
    "early",
    "mid",
    "late",
    "instructions",
    "precautions",
    "rxFilled"
  ],
[
  req.body.ndcNum,
  req.body.rxNum,
  req.body.drugName,
  req.body.drugForm,
  req.body.drugFormSize,
  req.body.drugFormMeasure,
  req.body.bottleFullQty,
  req.body.bottlePartialQty,
  req.body.rxRefills,
  req.body.rxWritten,
  req.body.rxDiscard,
  req.body.rxReorder,
  req.body.drugDose,
  req.body.early,
  req.body.mid,
  req.body.late,
  req.body.instructions,
  req.body.precautions,
  req.body.rxFilled
], function(result){
  res.json({id: result.insertId});
});
//});

// res.render instead???


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

router.get("/drugInventory", function(req, res){
  db.drugs.getDrugQuantity(function(result) {
    console.log("result: " ,result);
  })
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
  
// })

module.exports = router;

