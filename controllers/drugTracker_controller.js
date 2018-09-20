


var express = require("express");
var router = express.Router();

var db = require("../models/drug.js");

var path = require("path");


router.get("/", function(req, res){
  db.drugs.all(function(data){
    var hbsObject = {
      drugs: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });

//   db.contacts.all(function(data){
//     var hbsObjectTwo = {
//       contacts: data
//     };
//     console.log(hbsObjectTwo);

//   });
//   db.drugs.all(function(data){
//     var hbsObjectThree = {
//       drugs: data
//     };
//     console.log(hbsObjectThree.drugs[0].drugName);
//     console.log(hbsObjectThree.drugs[0].currentQty);
//   });
//   db.contacts.all(function(data){
//     var hbsObjectTwo = {
//       contacts: data
//     };
//     console.log(hbsObjectTwo);

//   });
//   res.render("index", hbsObjectOne);
// });







router.post("/drugList", function(req, res){
  db.drugs.create([
    "ndcNum", "rxNum", "pharmName", "doctorName","drugName", "drugForm", "drugFormSize", "drugFormMeasure", "currentQty", "bottleFullQty", "bottlePartialQty",
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
  req.body.currentQty,
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

router.get("/input", function(req, res){
res.sendFile(path.resolve("public/input.html"));
})

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
  
})

module.exports = router;

