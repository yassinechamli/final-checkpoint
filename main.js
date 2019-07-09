 // Your web app's Firebase configuration
 $(".btn").hide();

 const firebaseConfig = {
    apiKey: "AIzaSyDgIidmT8OLemKbwU6bGStUADYJBKgYteA",
    authDomain: "clover-837a0.firebaseapp.com",
    databaseURL: "https://clover-837a0.firebaseio.com",
    projectId: "clover-837a0",
    storageBucket: "clover-837a0.appspot.com",
    messagingSenderId: "518852088847",
    appId: "1:518852088847:web:052b6d16c87c6ed7"
  };
  // Initialize Firebase
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('black');
  function submitForm(e){
      e.preventDefault();
      var name = document.getElementById('name').value;
      var track = document.getElementById('track').value;
      var email = document.getElementById('email').value;
      var number = document.getElementById('phone').value;
      saveMessage(name,track,email,number);
  }
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  function saveMessage(name,track,email,number){
      var newMessageRef = messagesRef.push()
      newMessageRef.set({
          name : name,
          track : track,
          email : email,
          number : number,
      });
      
  }

function bold() {
  var ban = document.getElementById("texto").style.fontWeight;
   if (ban == 'normal') {
       document.getElementById("texto").style.fontWeight ="bold";
   }  else {
       document.getElementById("texto").style.fontWeight ="normal";
   } 
}
function italic() {
    var italic = document.getElementById("texto").style.fontStyle;
    if (italic == 'normal'){
        document.getElementById("texto").style.fontStyle="italic";
    } else {
        document.getElementById("texto").style.fontStyle="normal";
    }
}
function underline() {
    document.getElementById("texto").style.textDecoration="underline";
}
var changefont = function(font){
    console.log(font.value)
    document.getElementById("texto").style.fontFamily=font.value;
}
var changesize = function(size){
    console.log(size.value)
    document.getElementById("texto").style.fontSize=size.value;
}

    $("#b1").mouseenter(function(){
        $("#btn1").show();
    })
    $("#b1").mouseleave(function(){
        $("#btn1").hide()
    })
    
    $("#b2").mouseenter(function(){
        $("#btn2").show();
    })
    $("#b2").mouseleave(function(){
        $("#btn2").hide()
    })
    
    $("#b3").mouseenter(function(){
        $("#btn3").show();
    })
    $("#b3").mouseleave(function(){
        $("#btn3").hide()
    })
    
    $("#a1").mouseenter(function(){
        $("#btn4").show();
    })
    $("#a1").mouseleave(function(){
        $("#btn4").hide()
    })
    
    $("#a2").mouseenter(function(){
        $("#btn5").show();
    })
    $("#a2").mouseleave(function(){
        $("#btn5").hide()
    })
    
    $("#a3").mouseenter(function(){
        $("#btn6").show();
    })
    $("#a3").mouseleave(function(){
        $("#btn6").hide()
    })


  

  