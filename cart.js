var firebaseConfig = {
    apiKey: "AIzaSyB6Pi6NTRTQDBIpTiX7UBPJqh3D75sRKEE",
    authDomain: "e-mobileshop-bf3f0.firebaseapp.com",
    projectId: "e-mobileshop-bf3f0",
    storageBucket: "e-mobileshop-bf3f0.appspot.com",
    messagingSenderId: "735255362588",
    appId: "1:735255362588:web:89a2206c7631f43b4cb3d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let address = document.querySelector(".address").value;
  console.log(name, email, address);

  saveContactInfo(name, email, address);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, address) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    address: address,
  });
}