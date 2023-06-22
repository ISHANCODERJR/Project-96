function adduser() {
    username = document.getElementById("user-name").Value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
}