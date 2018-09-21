


var express = require("express");
var router = express.Router();

var db = require("../models/drug.js");

var path = require("path");


router.get("/index", function(req, res){
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

router.get("/input", function(req, res) {
  res.render("input");
});

router.post("/input", function(req, res){
  console.log('posting...');
  db.drugs.create([
    "ndcNum", "rxNum",  "pharmName", "doctorName","drugName", "drugForm", "drugFormSize", "drugFormMeasure", "bottleFullQty", "bottlePartialQty",
    "rxWritten",
    "rxFilled",
    "rxDiscard",
    "rxReorder",
    "drugDose",
    "drugFreq",
    "early",
    "middle",
    "late",
    "instructions",
    "precautions"
  ],
[
  req.body.ndcNum,
  req.body.rxNum,
  req.body.pharmName,
  req.body.doctorName,
  req.body.drugName,
  req.body.drugForm,
  req.body.drugFormSize,
  req.body.drugFormMeasure,
  // req.body.currentQty,
  req.body.bottleFullQty,
  req.body.bottlePartialQty,
  req.body.rxWritten,
  req.body.rxFilled,
  req.body.rxDiscard,
  req.body.rxReorder,
  req.body.drugDose,
  req.body.drugFreq,
  req.body.early,
  req.body.middle,
  req.body.late,
  req.body.instructions,
  req.body.precautions
], function(result){
  res.json({id: result.insertId});
});
//});

// res.render instead???


  // var hbsObjectOne;
  // db.drugs.all(function(data){
  //   hbsObjectOne = {
  //     drugs: data
  //   };
  //   console.log(hbsObjectOne);
  // });
  //   db.contacts.all(function(data){
  //     var hbsObjectTwo = {
  //       contacts: data
  //     };
  //     console.log(hbsObjectTwo);

  //   });
  //   res.render("index", hbsObjectOne);
 
});

router.get("/drugInventory", function(req, res){
  db.drugs.getDrugQuantity(function(result) {
    console.log("result: " ,result);
    res.render("index", {
      drugs: result
    })

  })
});

router.get("/input", function(req, res){
res.sendFile(path.resolve("public/input.html"));
})

// module.exports = function(app) {
 

//   // Create a new example
//   router.post("/", function(req, res) {1
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

