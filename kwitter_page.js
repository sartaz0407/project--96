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

userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
            name: userName,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";


}


function getData() {
      firebase.database().ref("/" + roomName).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();