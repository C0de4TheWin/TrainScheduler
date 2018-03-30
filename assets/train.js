// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyDV0iHPrRwMTm0aAb-1HU-VFADayf6Gg-c",
    authDomain: "allaboard-503fa.firebaseapp.com",
    databaseURL: "https://allaboard-503fa.firebaseio.com",
    projectId: "allaboard-503fa",
    storageBucket: "allaboard-503fa.appspot.com",
    messagingSenderId: "329845681218"
};
  firebase.initializeApp(config);
  
  var database = firebase.database();

  

// I need to code on button clicks for submit, remove and add
$("#submitbutton-btn").on("click", function(event) {
    event.preventDefault();

// Grabs user input
var formTrain = $("#train").val().trim();
var formDestination = $("#destination").val().trim();
var formTrain = moment($("#first-train").val().trim(), "DD/MM/YY").format("X");
var formFrequency = $("#frequency").val().trim();

// Creates local "temporary" object for holding employee data
var newTrain = {
  train: formTrain,
  destination: formDestination,
  firstTrain: formTrain,
  frequency: formFrequency,
};
   
// Uploads employee data to the database
database.ref().push(newTrain);

// Logs everything to console
console.log(newTrain.train);
console.log(newTrain.destination);
console.log(newTrain.firstTrain);
console.log(newTrain.frequency);

// Alert
alert("Train has been successfully added!");

// Clears all of the text-boxes
$("#train").val("");
$("#destination").val("");
$("#first-train").val("");
$("#frequency").val("");
});
    
    

    // Assumptions
    var tFrequency = 3;  //every three minutes

    // Time is 3:30 AM
    var firstTime = "03:30";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));