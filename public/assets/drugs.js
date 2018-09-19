$(document).ready(function(){

  //adding date to dateTitle div
  $(document).ready(function() {
    $ (".lead").append(new Date());
    });
// input objects coming from input.html


  $("#infoIn").on("click", function(){


   var early = false;
   var middle = false;
   var late = false;
   var non = false;

    if($("#early").is(':checked'))
    var early = true;

    if($("#mid").is(':checked'))
    var middle = true;

    if($("#late").is(':checked'))
    var late = true;

    if($("#non").is(':checked'))
    var late = true;
    

    var drug_db_input = {

      ndcNum: $("#ndcNum").val(),
      rxNum: $("#rxNum").val(),
      drugName: $("#drugName").val().trim(),
      rxNum: $("#rxNum").val(),
      drugForm: $('input:radio[name=drugForm]:checked').val(),
      drugFormSize: $("#drugFormSize").val(),
      drugFormMeasure: $("#drugFormMeasure").val(),
      bottleFullQty: $("#bottleFullQty").val(),
      bottlePartialQty: $("#bottlePartialQty").val(),
      rxRefills: $("#rxRefills").val(),
      rxWritten: $("#rxWritten").val(),
      rxDiscard: $("#rxDiscard").val(),
      rxReorder: $("#rxReorder").val(),
      drugDose: $("#drugDose").val(),
      drugFreq: $("#drugFreq").val(),
      early: early,
      middle: middle,
      late: late,
      instructions: $("#instructions").val(),
      precautions: $("#precautions").val(),
      rxFilled: $("#rxFilled").val()

    }

    console.log("drug in:", drug_db_input);


    var contact_db_pharm = {

      name: $("#name").val(),
      type: "pharmacy",
      inputAddress: $("#inputAddress").val(),
      inputCity: $("#inputCity").val(),
      inputState: $("#inputState").val(),
      inputZip: $("#inputZip").val(),
      email: $("#email").val(),
      phone: $("#phone").val()
    }

    var contact_db_prescr = {

      name: $("#name2").val(),
      type: "prescriber",
      inputAddress: $("#inputAddress2").val(),
      inputCity: $("#inputCity2").val(),
      inputState: $("#inputState2").val(),
      inputZip: $("#inputZip2").val(),
      email: $("#email2").val(),
      phone: $("#phone2").val()
    }
    console.log("pharm ctc:", contact_db_pharm);
    console.log("dr ctc:", contact_db_prescr);
 
  });

// Jordan's area: ///////////////////////////////////

  // var drugName = "Hydrocodone";

  // function populatePrecautions(arrayToUse, classToAdd, areaToAddTo){
    
  // }

  // $.ajax({
  //   url: "https://api.fda.gov/drug/label.json?search=openfda.brand_name:" + drugName,
  //   type: "GET"
  // }).then(function(results) {
  
  //   console.log(results);
  //   console.log("======================");
  //   console.log("Id Number: " + results.results[0].openfda.package_ndc[0]);
  //   // proudct_ndc ???????
  //   console.log("======================");
  //   console.log("Drug Interactions: " + results.results[0].drug_interactions);
  //   console.log("======================");
  //   console.log("Precautions: " + results.results[0].general_precautions);
  //   console.log("======================");
  //   console.log("Adverse Reactions: " + results.results[0].adverse_reactions);
  //   console.log("======================");
  //   console.log("Ingredients: " + results.results[0].description);
  //   console.log("======================");
  //   console.log("Instructions: " + results.results[0].dosage_and_administration);
  //   // better instructions than this?
  
  // })

});
