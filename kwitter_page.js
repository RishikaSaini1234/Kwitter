user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0,
    });
    document.getElementById("msg").value = "";
}

const firebaseConfig = {
    apiKey: "AIzaSyAFU7r7fJ1uIACjjD7-9TCP08cwH9saZCI",
    authDomain: "kwitter-c3f19.firebaseapp.com",
    databaseURL: "https://kwitter-c3f19-default-rtdb.firebaseio.com",
    projectId: "kwitter-c3f19",
    storageBucket: "kwitter-c3f19.appspot.com",
    messagingSenderId: "264451436019",
    appId: "1:264451436019:web:35de86960c47834a5b3686",
    measurementId: "G-KKQBX0PE03"
};

firebase.initializeApp(firebaseConfig);