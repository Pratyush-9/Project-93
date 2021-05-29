//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyBhIkxPjuXR245wLzGMeXBosOL2M0QYjNw",
      authDomain: "kwitter-app-4bed9.firebaseapp.com",
      projectId: "kwitter-app-4bed9",
      storageBucket: "kwitter-app-4bed9.appspot.com",
      messagingSenderId: "154110937124",
      appId: "1:154110937124:web:ce2ce769bb0c095cc870b1",
      measurementId: "G-HPCN86GL93"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
