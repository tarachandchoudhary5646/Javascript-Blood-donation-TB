//Global variables
var bloodDonateForm = document.getElementById('bloodDonateForm');
var successMessage = document.getElementById('successMessage');
var faildMessage = document.getElementById('faildMessage');
var userInfo;

// Form validation function start

function formValidation(){
    
    var usernameField, emailField, bloodGroupField, phoneNumber;

    //usernameField validation
    var username = document.getElementById('username');
    var errorField = username.nextSibling.nextSibling;
    var usernameRegex = /^[a-z]+$/;

    if(username.value == ''){
        errorField.innerText = "This field is required.";
        errorField.style.display = "block";
        usernameField = false;
    }else if(!usernameRegex.test(username.value)){
        errorField.innerText = "Please fill valid value";
        errorField.style.display = "block";
        usernameField = false;
    }else{
        errorField.style.display = "none";
        usernameField = true;
    }

    //Email field validation
    var yourEmail = document.getElementById('yourEmail');
    var errorField = yourEmail.nextSibling.nextSibling;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(yourEmail.value == ''){
        errorField.innerText = "This field is required.";
        errorField.style.display = "block";
        emailField = false;
    }else if(!emailRegex.test(yourEmail.value)){
        errorField.innerText = "Please fill valid value";
        errorField.style.display = "block";
        emailField = false;
    }else{
        errorField.style.display = "none";
        emailField = true;
    }

    //Select Blood group validation
    var selectBloodGroup = document.getElementById('selectBloodGroup');
    var errorField = selectBloodGroup.nextSibling.nextSibling;
    
    if(selectBloodGroup.value == ''){
        errorField.innerText = "This field is required.";
        errorField.style.display = "block";
        bloodGroupField = false;
    }else{
        errorField.style.display = "none";
        bloodGroupField = true;
    }

    //Phone number field validation
    var yourPhone = document.getElementById('yourPhone');
    var errorField = yourPhone.nextSibling.nextSibling;
    var emailRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if(yourPhone.value == ''){
        errorField.innerText = "This field is required.";
        errorField.style.display = "block";
        phoneNumber = false;
    }else if(!emailRegex.test(yourPhone.value)){
        errorField.innerText = "Please fill valid value";
        errorField.style.display = "block";
        phoneNumber = false;
    }else{
        errorField.style.display = "none";
        phoneNumber = true;
    }

    if(usernameField && emailField && bloodGroupField && phoneNumber){
        userInfo = [username.value, yourEmail.value, selectBloodGroup.value, yourPhone.value];
        return true;
    }else{
        return false
    }
}

// Form validation function close

// Form submit event start

document.getElementById('submitBtn').addEventListener('click', function(e){
    e.preventDefault();
    if(formValidation()){
        successMessage.style.display = "block";
        faildMessage.style.display = "none";
        console.log(userInfo);
    }else{
        faildMessage.style.display = "block";
        successMessage.style.display = "none";
    }
});

// Form submit event close