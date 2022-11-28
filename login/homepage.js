
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
  
 