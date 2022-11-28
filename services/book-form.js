var currYear = (new Date()).getFullYear();
var currMonth = (new Date()).getMonth();
var currDay = (new Date()).getDate();
// console.log(currYear);
// console.log(currDay);
// console.log("Hi");


$(document).ready(function() {
  $(".datepicker").datepicker({
    defaultDate: new Date(currYear,currMonth,currDay),
    // setDefaultDate: new Date(2000,01,31),
    minDate: new Date(currYear,currMonth,currDay),
    maxDate: new Date(currYear,12,31),
    yearRange: [currYear-1, currYear],
    format: "yyyy/mm/dd"    
  });
});

$(document).ready(function(){
    $('.timepicker').timepicker({
        
    });
});

// let cancelButton = document.querySelector("#cancel-button");
// let bookButton = document.queryCommandValue("#book-button");
/*
let redirect = function(){
    window.location = "../login/homepage.html"
}*/
