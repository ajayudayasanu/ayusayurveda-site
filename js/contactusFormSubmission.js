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
  var doctorEnquireRef = firebase.database().ref("ContactForm");
  
  // Listen for form submit
  document.getElementById("contact-email-form").addEventListener("submit", submitSubinEnquireForm);
  
  
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
      message
    })
      // Show alert
      document.querySelector(".form-alert").style.display = "block";
  
      // Hide alert after 3 seconds
      setTimeout(function () {
        document.querySelector(".form-alert").style.display = "none";
      }, 3000);
  
      // Clear form
      document.getElementById("contact-email-form").reset();
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
  