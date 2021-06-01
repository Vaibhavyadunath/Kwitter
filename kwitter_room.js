
  var firebaseConfig = {
    apiKey: "AIzaSyB1zckL9KUyiABPA44wy0taFxA5KBg9XCQ",
    authDomain: "let-s-chat-9f268.firebaseapp.com",
    databaseURL: "https://let-s-chat-9f268-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-9f268",
    storageBucket: "let-s-chat-9f268.appspot.com",
    messagingSenderId: "463541541198",
    appId: "1:463541541198:web:719572537b45d70ddb661f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
      {
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });

            localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
