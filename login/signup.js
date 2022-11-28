

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      window.alert('Registered');// User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });


function login(){
    var name = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirm_password").value;

    if (userPass === confirmPass && /^[a-zA-Z]/.test(name)){    
      firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
      .then((user) => {
      window.location = 'signin.html'; // Signed in 
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage);
        // ..
      });
    }
    else if (userPass != confirmPass){
      alert("Passwords do not match");
    }
    else if (! (/^[A-Za-z]+$/.test(name))){
      alert("Invalid Name");
    }
    else{
      alert("Invalid Input");
    }
}