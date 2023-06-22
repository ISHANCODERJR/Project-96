
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9zl7j7gYQarufIqekpEvO4voOyj8nStk",
    authDomain: "project-94-2927b.firebaseapp.com",
    databaseURL: "https://project-94-2927b-default-rtdb.firebaseio.com",
    projectId: "project-94-2927b",
    storageBucket: "project-94-2927b.appspot.com",
    messagingSenderId: "344160007477",
    appId: "1:344160007477:web:a896f75809ba68a896c87c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

room_name = localStorage.getItem("Roomname");
user_name = localStorage.getItem("Username");

console.log("room name "+room_name);
console.log("user name "+user_name);

function logout() {
      localStorage.removeItem("Roomname");
      localStorage.removeItem("Username");
      window.location.replace("index.html");
}
function send() {
      msg = document.getElementById("msg").value;
      console.log("Message "+msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
            dislike:0
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