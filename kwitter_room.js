var firebaseConfig = {
      apiKey: "AIzaSyAnhHwfYc3Cp3nrrQEklxFZRkdrseLNUbA",
      authDomain: "kwitter-e0fa5.firebaseapp.com",
      databaseURL: "https://kwitter-e0fa5-default-rtdb.firebaseio.com",
      projectId: "kwitter-e0fa5",
      storageBucket: "kwitter-e0fa5.appspot.com",
      messagingSenderId: "585797431888",
      appId: "1:585797431888:web:d0b15b27352c2523a69755",
      measurementId: "G-11YMPXHKCC"
    };
      firebase.initializeApp(firebaseConfig);

userName=localStorage.getItem("userName");
document.getElementById("userName").innerHTML = "Welcome " + userName + "!";


function addRoom(){
      roomName=document.getElementById("roomName").value;
      firebase.database().ref("/").child(roomName).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomName",roomName);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("roomName",name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location="index.html";
}
