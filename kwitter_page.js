//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
