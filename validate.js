         window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input element 
	// they are initially empty and hidden




	var email = document.getElementById("email");
  var span1 = document.createElement("span");
  span1.style.display = "flex";
  email.parentNode.appendChild(span1);

var pwd = document.getElementById("pwd");
var span2 = document.createElement("span");
 span2.style.display = "flex"; 
pwd.parentNode.appendChild(span2);

var confirm = document.getElementById("confirm");
       

    email.onfocus = function myAction() {
  //alert("The value of the input field was changed.");
span1.style.display = "flex";
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value.match(validRegex)) {

   // alert("Valid email address!");
   span1.innerHTML = "<font color='green'>Nice one !</font>";

    //document.form1.text1.focus();

    return true;

  } else {

  
    span1.innerHTML = "<font color='red'>Please input a valid Email address !</font>";
  

  }





}
	
//For password ish
  pwd.onfocus = function(){
    span2.style.display = "flex";
span2.innerHTML = "<font color='red'>Password should include a minimum of 6 characters </br> which contain at least one numeric digit, one uppercase and one lowercase letter</font>";
    }

    ///////////////////////////////////////   

    email.onblur = function(){
     var empty= "";
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//if empty
if(email.value.match(empty)){
  span1.style.display = "none";
}

  if (email.value.match(validRegex)) {

   // alert("Valid email address!");
   span1.innerHTML = "<font color='green'>Nice one !</font>";

    //document.form1.text1.focus();

    return true;

  } else {

   
    span1.innerHTML = "<font color='red'>Please input a valid Email address !</font>";
  

  }

    }

   //////////////////////////////////////////////// 

    


  pwd.onblur = function(){

span2.style.display = "none";



  }

  //////////////////After clicking in the Submit ////////////////


    var form = document.getElementById("myForm");
    form.onsubmit = function(e){

    		var email = document.getElementById("email");
  var span1 = document.createElement("div");
  span1.style.display = "flex";
  email.parentNode.appendChild(span1);

        //alert("Youve submitted !");

      

   //Confirm if the email submitted, is valid.

     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value.match(validRegex)) {

   // alert("Valid email address!");
   span1.innerHTML = "<font color='green'>Nice one !</font>";

    e.preventDefault();

    return true;

  } else {
     var c = document.getElementsByTagName("input")[0];
   c.style.border="2px solid red";
   
    span1.innerHTML = "<font color='red'>Please input a valid Email address !</font>";
   email.onfocus = function a() {
      span1.style.display = "none";
   }

  }	




//Now confirm if the passwords matches.
var pwd = document.getElementById("pwd");
var pwd2 = document.getElementById("confirm");

var span3 = document.createElement("span");
 span3.style.display = "flex";
pwd2.parentNode.appendChild(span3);

//Firstly confirm if password is lesser than 6 characters
     
    
      var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

      if(pwd.value.match(passw)) 
      { 
     // alert('Correct, try another...')

      //if the rule has been met, now we will proceed to confirm if the passwords match.
    
    if(pwd.value === pwd2.value){
var span3 = document.createElement("span");
 span3.style.display = "flex";
pwd2.parentNode.appendChild(span3);

        span3.style.display = "flex";

span3.innerHTML ="<font color='green'>Great Job.. The passwords match !</font>";

e.preventDefault();

    }else{
  
       span3.style.display = "flex";

span3.innerHTML ="<font color='red'> passwords do not match</font>";

pwd.onfocus = function a() {
      span3.style.display = "none";
      
   }

   pwd2.onfocus = function b() {
      span2.style.display = "none";
   }


e.preventDefault();
    }

      return true;
      }
      else
      { 
      //alert('Wrong...!')

     span3.style.display = "flex";
span3.innerHTML = "<font color='red'>Password should include a minimum of 6 characters </br> which contain at least one numeric digit, one uppercase and one lowercase letter</font>";



//apply red color to the text bar

  var c = document.getElementsByTagName("input")[1];
   c.style.border="2px solid red";

    var d = document.getElementsByTagName("input")[2];
   d.style.border="2px solid red";



   pwd.onfocus = function a() {
      span3.style.display = "none";
      
   }

   pwd2.onfocus = function b() {
      span2.style.display = "none";
   }

      return false;
      }

      





  e.preventDefault();

    }


}
