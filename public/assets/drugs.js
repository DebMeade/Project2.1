$(document).ready(function(){


  var drugName = "Hydrocodone";

  function populatePrecautions(arrayToUse, classToAdd, areaToAddTo){
    
  }

  $.ajax({
    url: "https://api.fda.gov/drug/label.json?search=openfda.brand_name:" + drugName,
    type: "GET"
  }).then(function(results) {
  
    console.log(results);
    console.log("======================");
    console.log("Id Number: " + results.results[0].openfda.package_ndc[0]);
    // proudct_ndc ???????
    console.log("======================");
    console.log("Drug Interactions: " + results.results[0].drug_interactions);
    console.log("======================");
    console.log("Precautions: " + results.results[0].general_precautions);
    console.log("======================");
    console.log("Adverse Reactions: " + results.results[0].adverse_reactions);
    console.log("======================");
    console.log("Ingredients: " + results.results[0].description);
    console.log("======================");
    console.log("Instructions: " + results.results[0].dosage_and_administration);
    // better instructions than this?
  
  })



})