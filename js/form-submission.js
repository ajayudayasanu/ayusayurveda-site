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
var messagesRef = firebase.database().ref("messages"); //issue here
// Listen for form submit
document.getElementById("appoinment-form").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var phone = getInputVal("phone");
  var consultation_type = getInputVal("consultation_type");
  var medical_concern = getInputVal("medical_concern");
  
  //validation
  if(name ===''){
    showErrorMsg('please enter your name')
  } else if (phone===''){
    showErrorMsg('please enter your Phone number')
  } else if(phone.length !== 10){
    showErrorMsg('Phone number must have 10 digits')
  } 
  else if (consultation_type === "Type of Consultation Required") {
    showErrorMsg('please select a consulattion type');
  } else if (medical_concern === "select Medical Concern") {
    showErrorMsg('please select a medical concern');
  } else {
    // Save message
    saveMessage(name, phone, consultation_type,medical_concern);

    // Show alert
    document.querySelector(".form-alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function () {
      document.querySelector(".form-alert").style.display = "none";
    }, 3000);

    // Clear form
    document.getElementById("appoinment-form").reset();
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

// Save message to firebase
function saveMessage(name, phone, consultation_type,medical_concern) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone: phone,
    consultation_type: consultation_type,
    medical_concern: medical_concern,
  });
}


$(function () {
  $('#datepicker').datepicker({
      format: "dd/mm/yyyy",
      autoclose: true,
      todayHighlight: true,
    showOtherMonths: true,
    selectOtherMonths: true,
    autoclose: true,
    changeMonth: true,
    changeYear: true,
    orientation: "button"
  });
});