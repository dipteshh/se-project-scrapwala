// Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      var firebaseConfig = {
        apiKey: "AIzaSyCILXZxgYqF_MV2x45dMbfhG17fPr8y9x0",
        authDomain: "raddiwala-e37c6.firebaseapp.com",
        databaseURL: "https://raddiwala-e37c6-default-rtdb.firebaseio.com",
        projectId: "raddiwala-e37c6",
        storageBucket: "raddiwala-e37c6.appspot.com",
        messagingSenderId: "178533211336",
        appId: "1:178533211336:web:1966fa6e7a8a7660d259fd",
        measurementId: "G-B6BX1P96TD"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();


// Listen for form submit

var messageRef = firebase.database().ref('messages');

document.getElementById("contactForm").addEventListener('submit', submitForm);


//Submit Form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal("name-b381");
    var email = getInputVal("email-b381");
    var message = getInputVal("message-b381");

    saveMessage(name, email, message);

    // show alert
    document.querySelector('.alert').style.display = 'block';

    

    // Hide after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 2000);

    document.getElementById('contactForm').reset();
}

// Function to get Form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save messages

function saveMessage(name, email, message){
    var newmessageRef = messageRef.push();
    newmessageRef.set({
        name: name,
        email: email,
        message: message
    });
}

//Authentication


firebase.auth().onAuthStateChanged((user) => {

    if (user) {
        document.getElementById("log").innerText = "Logout";
        document.getElementById("log").href="../login/logout.html";
        document.getElementById("services").href="../Services/book-form.html";
        
       
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
        
      // ...
    }
  });
  
 