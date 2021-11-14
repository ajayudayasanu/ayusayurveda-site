// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
  apiKey: "AIzaSyB7gRcmJkZQ37HbQDQIkTPmrcIPkFoXSlY",
  authDomain: "ayusayurdea.firebaseapp.com",
  projectId: "ayusayurdea",
  storageBucket: "ayusayurdea.appspot.com",
  messagingSenderId: "764024855408",
  appId: "1:764024855408:web:0d6fda3ee1f66d4e664db5",
  measurementId: "G-5818K58QNZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();
// Reference messages collection
var doctorEnquireRef = firebase.database().ref("doctorEnquire");

// Listen for form submit
document.getElementById("anagha-doctor-enquire-form").addEventListener("submit", submitSubinEnquireForm);


// subin enquire submit form
function submitSubinEnquireForm (e){
  e.preventDefault();
  // Get values
  var name = getInputVal("name");
  var phone = getInputVal("phone");
  var email = getInputVal("email");
  var message = getInputVal("message");
 // validation
  if(name ===''){
    showErrorMsg('please enter your name')
  } else if( phone==''){
    showErrorMsg('please enter your phone number')
  } else if(phone.length !==10){
    showErrorMsg('Phone number must have 10 digits')
  } else {

  var doctorEnquire =doctorEnquireRef.push()
  doctorEnquire.set({
    name,
    phone,
    email,
    doctor:"Anagha",
    message
  })
    // Show alert
    document.querySelector(".form-alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function () {
      document.querySelector(".form-alert").style.display = "none";
    }, 3000);

    // Clear form
    document.getElementById("anagha-doctor-enquire-form").reset();
  }
}

//------------------helper fn----------------------//

function showErrorMsg(msg) {
  // Show alert
  var ErrorDocRef= document.querySelector(".error-alert");
  msg ? ErrorDocRef.innerHTML=msg : ErrorDocRef.innerHTML='please fill all required info'
  ErrorDocRef.style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    ErrorDocRef.style.display = "none";
  }, 3000);
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}
