// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDUi5VD0BBMfgIZoQZeNlf_uZvBjO5-6r0",
  authDomain: "project94-b5088.firebaseapp.com",
  databaseURL: "https://project94-b5088-default-rtdb.firebaseio.com",
  projectId: "project94-b5088",
  storageBucket: "project94-b5088.appspot.com",
  messagingSenderId: "761442466062",
  appId: "1:761442466062:web:5ff61241bc3358bc58bf5f",
  measurementId: "G-XX74KJEV8R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var UserName_1 = localStorage.getItem("User_1");
document.getElementById("UserName_Display").innerHTML = "Welcome " + UserName_1 +"!";
function rediectToRoomName(Names){
  console.log(Names);
  localStorage.setItem("Room_Name", Names);
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("Output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey =
  childSnapshot.key;
  Room_Names = childKey;
  //Start code
  console.log("Room Names: " + Room_Names);
  Row = "<div class='room_name' id="+Room_Names+" onclick='redirectToRoomName(this.id)'>#"+ Room_Names +"</div><hr>";
  document.getElementById("Output").innerHTML+= Row;
  //End code
});});
}
getData();

function AddRoom(){
  room_name = document.getElementById("Input_Room_Name").value;
  console.log(room_name);
  firebase.database().ref("/").child(room_name).update({
      Purpose: "Adding Room"
  });
  document.getElementById("Output").innerHTML += room_name;

  window.location = "kwitter_page.html";
}
function LogOut(){
localStorage.removeItem("User_1");
localStorage.removeItem("Room_Name");
window.location = "Login.html";
}


