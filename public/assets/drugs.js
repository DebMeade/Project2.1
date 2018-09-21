$(document).ready(function () {

<<<<<<< HEAD

  var time = moment().format("dddd, MMMM Do YYYY");
  
  console.log(time)
  $ (".lead").append(time);
  
  $(".drugCheckMark").on("click", function(event) {
    console.log(this.parentElement.parentElement);
    var row = this.parentElement.parentElement;
    console.log(this.checked);
    if(this.checked) {
      row.classList.add("strikethrough")
    } else {
      row.classList.remove("strikethrough")
    }
  });
  
      
  
    $(function(){
      $("#infoIn").on("click", function(event){
  
  
        var early = false;
        var middle = false;
        var late = false;
        var non = false;
  
  
        if ($("#early").is(':checked'))
          var early = true;
  
        if ($("#mid").is(':checked'))
          var middle = true;
  
        if ($("#late").is(':checked'))
          var late = true;
  
        if ($("#non").is(':checked'))
          var late = true;
  
  
        //  var drug_db_input = {
  
        //    ndcNum: 1,
        //    rxNum: 1,
        //    pharmName: 'dsfdfsdf',
        //    doctorName: 'sdfsdfsd',
        //    drugName: "dfgdfg",
        //    drugForm: "dsfdsf",
        //    drugFormSize: 1,
        //    drugFormMeasure: "dfdfsdf",
        //    currentQty: 1,
        //    bottleFullQty: 1,
        //    bottlePartialQty: 1,
        //    rxWritten: '2018-09-19',
        //    rxFilled: '2018-09-19',
        //    rxDiscard: '2018-09-19',
        //    rxReorder: '2018-09-19',
        //    drugDose: 1,
        //    drugFreq: 1,
        //    early: true,
        //    middle: true,
        //    late: true,
        //    instructions: "dsfdfg",
        //    precautions: "dfgdg",
        //  }
  
        var drug_db_input = {
  
          ndcNum: $("#ndcNum").val(),
          rxNum: $("#rxNum").val(),
          pharmName: $("#pharmName").val(),
          doctorName: $("#doctorName").val(),
          drugName: $("#drugName").val().trim(),
          drugForm: $('input:radio[name=drugForm]:checked').val(),
          drugFormSize: $("#drugFormSize").val(),
          drugFormMeasure: $("#drugFormMeasure").val(),
          // currentQty: $("#currentQty").val(),
          bottleFullQty: $("#bottleFullQty").val(),
          bottlePartialQty: $("#bottlePartialQty").val(),
          rxWritten: $("#rxWritten").val(),
          rxFilled: $("#rxRefills").val(),
          rxDiscard: $("#rxDiscard").val(),
          rxReorder: $("#rxReorder").val(),
          drugDose: $("#drugDose").val(),
          drugFreq: $("#drugFreq").val(),
          early: early,
          middle: middle,
          late: late,
          instructions: $("#instructions").val(),
          precautions: $("#precautions").val(),
  
  
        }
  
        console.log("drug in:", drug_db_input);
  
  
        $.ajax("/input", {
          type: "POST",
          data: drug_db_input
        }).then(
          function (result) {
            console.log("Success!: ", result);
          }
        );
  
  
  
  
        var queryURL = "https://api.fda.gov/drug/label.json?search=openfda.brand_name:hydrocodone" + drugName;
        
  
        $.ajax({
          url: queryURL,
          type: "GET"
        }).then(function (results) {
  
          // console.log(results);
          // console.log("======================");
          // console.log("Id Number: " + results.results[0].openfda.package_ndc[0]);
          // // proudct_ndc ???????
          // console.log("======================");
          // console.log("Drug Interactions: " + results.results[0].drug_interactions);
          // console.log("======================");
          console.log("Precautions: " + results.results[0].general_precautions);
          // console.log("======================");
          // console.log("Adverse Reactions: " + results.results[0].adverse_reactions);
          // console.log("======================");
          // console.log("Ingredients: " + results.results[0].description);
          console.log("======================");
          console.log("Instructions: " + results.results[0].dosage_and_administration);
  
  
        })
      });
     
     
         var contact_db_pharm = {
     
           pharmName: $("#pharmName").val(),
           type: "pharmacy",
           inputAddress: $("#inputAddress").val(),
           inputCity: $("#inputCity").val(),
           inputState: $("#inputState").val(),
           inputZip: $("#inputZip").val(),
           email: $("#email").val(),
           phone: $("#phone").val()
         }
     
         var contact_db_prescr = {
     
           doctorName: $("#doctorName").val(),
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
      
  
      $("#ndcNum").val("");
      $("#rxNum").val("");
      $("#pharmName").val("");
      $("#doctorName").val("");
      $("#drugName").val("");
      $('input:radio[name=drugForm]:checked').val("");
      $("#drugFormSize").val("");
      $("#drugFormMeasure").val("");
      $("#bottleFullQty").val("");
      $("#bottlePartialQty").val("");
      $("#rxWritten").val("");
      $("#rxRefills").val("");
      $("#rxDiscard").val("");
      $("#rxReorder").val("");
      $("#drugDose").val("");
      $("#drugFreq").val("");
      $("#instructions").val("");
      $("#precautions").val("");
  
      $("#pharmName").val("");
      $("#inputAddress").val("");
      $("#inputCity").val("");
      $("#inputState").val("");
      $("#inputZip").val("");
      $("#email").val("");
      $("#phone").val("");
  
      $("#doctorName").val("");
      $("#inputAddress2").val("");
      $("#inputCity2").val("");
      $("#inputState2").val("");
      $("#inputZip2").val("");
      $("#email2").val("");
      $("#phone2").val("");
  
  
  
  
       });
  
      })
  
  
  
      
  
  
  
  
=======

var time = moment().format("dddd, MMMM Do YYYY");

console.log(time)
$ (".lead").append(time);

$(".drugCheckMark").on("click", function(event) {
  console.log(this.parentElement.parentElement);
  var row = this.parentElement.parentElement;
  console.log(this.checked);
  if(this.checked) {
    row.classList.add("strikethrough")
  } else {
    row.classList.remove("strikethrough")
  }
});

    

  $(function(){
    $("#infoIn").on("click", function(event){


      var early = false;
      var middle = false;
      var late = false;
      var non = false;


      if ($("#early").is(':checked'))
        var early = true;

      if ($("#mid").is(':checked'))
        var middle = true;

      if ($("#late").is(':checked'))
        var late = true;

      if ($("#non").is(':checked'))
        var late = true;


      //  var drug_db_input = {

      //    ndcNum: 1,
      //    rxNum: 1,
      //    pharmName: 'dsfdfsdf',
      //    doctorName: 'sdfsdfsd',
      //    drugName: "dfgdfg",
      //    drugForm: "dsfdsf",
      //    drugFormSize: 1,
      //    drugFormMeasure: "dfdfsdf",
      //    currentQty: 1,
      //    bottleFullQty: 1,
      //    bottlePartialQty: 1,
      //    rxWritten: '2018-09-19',
      //    rxFilled: '2018-09-19',
      //    rxDiscard: '2018-09-19',
      //    rxReorder: '2018-09-19',
      //    drugDose: 1,
      //    drugFreq: 1,
      //    early: true,
      //    middle: true,
      //    late: true,
      //    instructions: "dsfdfg",
      //    precautions: "dfgdg",
      //  }

      var drug_db_input = {

        ndcNum: $("#ndcNum").val(),
        rxNum: $("#rxNum").val(),
        pharmName: $("#pharmName").val(),
        doctorName: $("#doctorName").val(),
        drugName: $("#drugName").val().trim(),
        drugForm: $('input:radio[name=drugForm]:checked').val(),
        drugFormSize: $("#drugFormSize").val(),
        drugFormMeasure: $("#drugFormMeasure").val(),
        // currentQty: $("#currentQty").val(),
        bottleFullQty: $("#bottleFullQty").val(),
        bottlePartialQty: $("#bottlePartialQty").val(),
        rxWritten: $("#rxWritten").val(),
        rxFilled: $("#rxRefills").val(),
        rxDiscard: $("#rxDiscard").val(),
        rxReorder: $("#rxReorder").val(),
        drugDose: $("#drugDose").val(),
        drugFreq: $("#drugFreq").val(),
        early: early,
        middle: middle,
        late: late,
        instructions: $("#instructions").val(),
        precautions: $("#precautions").val(),


      }

      console.log("drug in:", drug_db_input);


      $.ajax("/input", {
        type: "POST",
        data: drug_db_input
      }).then(
        function (result) {
          console.log("Success!: ", result);
        }
      );




      var queryURL = "https://api.fda.gov/drug/label.json?search=openfda.brand_name:hydrocodone" + drugName;
      

      $.ajax({
        url: queryURL,
        type: "GET"
      }).then(function (results) {

        // console.log(results);
        // console.log("======================");
        // console.log("Id Number: " + results.results[0].openfda.package_ndc[0]);
        // // proudct_ndc ???????
        // console.log("======================");
        // console.log("Drug Interactions: " + results.results[0].drug_interactions);
        // console.log("======================");
        console.log("Precautions: " + results.results[0].general_precautions);
        // console.log("======================");
        // console.log("Adverse Reactions: " + results.results[0].adverse_reactions);
        // console.log("======================");
        // console.log("Ingredients: " + results.results[0].description);
        console.log("======================");
        console.log("Instructions: " + results.results[0].dosage_and_administration);


      })
    });
   
   
       var contact_db_pharm = {
   
         pharmName: $("#pharmName").val(),
         type: "pharmacy",
         inputAddress: $("#inputAddress").val(),
         inputCity: $("#inputCity").val(),
         inputState: $("#inputState").val(),
         inputZip: $("#inputZip").val(),
         email: $("#email").val(),
         phone: $("#phone").val()
       }
   
       var contact_db_prescr = {
   
         doctorName: $("#doctorName").val(),
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
    

    $("#ndcNum").val("");
    $("#rxNum").val("");
    $("#pharmName").val("");
    $("#doctorName").val("");
    $("#drugName").val("");
    $('input:radio[name=drugForm]:checked').val("");
    $("#drugFormSize").val("");
    $("#drugFormMeasure").val("");
    $("#bottleFullQty").val("");
    $("#bottlePartialQty").val("");
    $("#rxWritten").val("");
    $("#rxRefills").val("");
    $("#rxDiscard").val("");
    $("#rxReorder").val("");
    $("#drugDose").val("");
    $("#drugFreq").val("");
    $("#instructions").val("");
    $("#precautions").val("");

    $("#pharmName").val("");
    $("#inputAddress").val("");
    $("#inputCity").val("");
    $("#inputState").val("");
    $("#inputZip").val("");
    $("#email").val("");
    $("#phone").val("");

    $("#doctorName").val("");
    $("#inputAddress2").val("");
    $("#inputCity2").val("");
    $("#inputState2").val("");
    $("#inputZip2").val("");
    $("#email2").val("");
    $("#phone2").val("");




     });

    })



    



>>>>>>> 263d0106c784aaf83ce02edbf49e99e1e8a553f4
