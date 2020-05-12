  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBJrtBbQ7ksl-ETB2LMkEmUCPwBzg1qfm8",
    authDomain: "contact-me-307a3.firebaseapp.com",
    databaseURL: "https://contact-me-307a3.firebaseio.com",
    projectId: "contact-me-307a3",
    storageBucket: "contact-me-307a3.appspot.com",
    messagingSenderId: "910807831328",
    appId: "1:910807831328:web:1f33850713ca69354cbd45",
    measurementId: "G-Q0M6MPZWVW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // reference messages collection
  var messagesRef = firebase.database().ref('messages');

  document.getElementById('contactform').addEventListener('submit', submitForm);
  
  function submitForm(e){
      e.preventDefault();
  
  //get values 
      var name = getInputVal('name');
      var email = getInputVal('email');
      var message = getInputVal('message');
      
      saveMessage(name, email, message);
  
      //show alert
      document.querySelector('.alert1').style.display = 'block';
  
      //hide alert
      setTimeout(function(){
          document.querySelector('.alert1').style.display = 'none';
      },3000);
  }
  
  //function to get form values
  function getInputVal(id){
      return document.getElementById(id).value;
    }

  //save message to firebase
  function saveMessage(name, email, message){
       var newMessageRef = messagesRef.push();
       newMessageRef.set({
           name: name,
          
           email:email,
          
           message:message
       });
  }
