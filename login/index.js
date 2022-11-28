   
 




function login(){
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
    
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  .then((user) => {
    window.location = 'homepage.html';
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage);
  });
}