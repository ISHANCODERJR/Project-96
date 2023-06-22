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

  user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Room_names",name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}