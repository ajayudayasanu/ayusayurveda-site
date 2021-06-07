// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
  apiKey: "AIzaSyBZRi1FzjLAYrKSEjspi_xuXMTJIS4vNvY",
  authDomain: "ayus-ayurveda.firebaseapp.com",
  projectId: "ayus-ayurveda",
  storageBucket: "ayus-ayurveda.appspot.com",
  databaseURL: "https://ayus-ayurveda-default-rtdb.asia-southeast1.firebasedatabase.app",
  messagingSenderId: "449799681631",
  appId: "1:449799681631:web:ab9166d8f88ab8f20dcdea",
  measurementId: "G-YRM44WH6BM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();
// Reference messages collection
var messagesRef = firebase.database().ref("messages"); //issue here
// Listen for form submit
document.getElementById("email-form").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var phone = getInputVal("phone");
  var consultation_type = getInputVal("consultation_type");
  var medical_concern = getInputVal("medical_concern");
  
  //validation
  if (consultation_type === "Type of Consultation Required") {
    showErrorMsg();
  } else if (medical_concern === "select Medical Concern") {
    showErrorMsg();
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
    document.getElementById("email-form").reset();
  }
}

//------------------helper fn----------------------//

function showErrorMsg() {
  // Show alert
  document.querySelector(".error-alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".error-alert").style.display = "none";
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