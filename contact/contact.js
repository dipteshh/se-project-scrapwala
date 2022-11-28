// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyB-k3rnXAwzn7PDxTrpo29CMP-WFZQOgxM",
  authDomain: "se-project-database.firebaseapp.com",
  databaseURL:
    "https://se-project-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "se-project-database",
  storageBucket: "se-project-database.appspot.com",
  messagingSenderId: "416994024086",
  appId: "1:416994024086:web:2093ec25b2d6679ab740b7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Listen for form submit

var messageRef = firebase.database().ref("messages");

document.getElementById("contactForm").addEventListener("submit", submitForm);

//Submit Form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name-b381");
  var email = getInputVal("email-b381");
  var message = getInputVal("message-b381");

  saveMessage(name, email, message);

  // show alert
  document.querySelector(".alert").style.display = "block";

  // Hide after 3 sec
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 2000);

  document.getElementById("contactForm").reset();
}

// Function to get Form values

function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save messages

function saveMessage(name, email, message) {
  var newmessageRef = messageRef.push();
  newmessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}

//Authentication

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("log").innerText = "Logout";
    document.getElementById("log").href = "../login/logout.html";
    document.getElementById("services").href = "../Services/book-form.html";

    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // ...
  }
});
