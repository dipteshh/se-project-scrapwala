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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var bookRef = firebase.database().ref("bookings");

// document.getElementById("bookRaddiwala").addEventListener("submit", bookForm);

//Submit Form
function bookForm() {
  // Get values
  var date = getInputVal("bdate");
  var time = getInputVal("btime");
  var name = getInputVal("first_name") + " " + getInputVal("last_name");
  var address = getInputVal("address");
  var city = getInputVal("town");
  var pin = getInputVal("pin-code");
  var email = getInputVal("email");
  var phone = getInputVal("phone-number");

  saveData(date, time, name, address, city, pin, email, phone);

  alert("Booking Successful");

  // show alert
  /*
    document.getElementById('alert').style.display = 'block';

    // Hide after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 2000); 

    document.getElementById('bookRaddiwala').reset();*/
}

// Function to get Form values

function cancelForm() {
  alert("Booking Canceled");
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save messages

function saveData(date, time, name, address, city, pin, email, phone) {
  var newbookingRef = bookRef.push();
  newbookingRef.set({
    date: date,
    time: time,
    name: name,
    address: address,
    city: city,
    pin: pin,
    email: email,
    phone: phone,
  });
}
