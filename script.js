var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var passError = document.getElementById("password-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name=document.getElementById("contact-name").value;
    if(name.length == 0){
        nameError.innerHTML="name is required"
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
     nameError.innerHTML="write a full name"
          return false
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}

function validatephone(){
     var phone=document.getElementById("contact-phone").value;
     if(phone.length==0){
         phoneError.innerHTML="phone number is required"
         return false
     }
     if(phone.length !== 10){
        phoneError.innerHTML="phone number should be 10 digit"
        return false
     }
     if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="only digits please"
          return false
     }
      phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}
function validateEmail(){
        var email =document.getElementById("contact-email").value;

 if(email.length==0){
         emailError.innerHTML="email ID is required"
         return false
     }
      if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML="only invalid"
          return false
     }
      emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
   
}

function validatepassword() {
    var password = document.getElementById("contact-password").value;

    if (password.length == 0) {
        passError.innerHTML = "Password is required";
        return false;
    }

    if (password.length < 8) {
        passError.innerHTML = "Password must be at least 8 characters";
        return false;
    }
     if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#])[A-Za-z\d@$!%*?&.#]{8,}$/)) {
        passError.innerHTML = "Use uppercase, lowercase, number & special character";
        return false;
    }

    passError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

 function  validateform(){
    if(!validateName()|| !validateEmail() || !validatepassword()|| !validatephone()){
        submitError.style.display="block"
    submitError.innerHTML="please fix this  error to submit"
    setTimeout(function(){submitError.style.display="none"},3000)
    return false
    }
    alert("form submitted successfully🎊🎉")
 }
