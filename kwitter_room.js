
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAiQp34f4OenZcLxVbnaG60ghb65Xw6BhY",
      authDomain: "kwitter-a1793.firebaseapp.com",
      projectId: "kwitter-a1793",
      storageBucket: "kwitter-a1793.appspot.com",
      messagingSenderId: "58473614065",
      appId: "1:58473614065:web:5545b91b6e1be4aaf53750"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
