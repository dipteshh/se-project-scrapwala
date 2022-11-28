function Log(){
    firebase.auth().signOut().then(function() {
        window.location = "homepage.html"        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
      
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
       
        setTimeout(Log, 2000);
        
       
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
        
      // ...
    }
  });