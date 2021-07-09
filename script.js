document.getElementById("submitbtn").addEventListener("click", function() {

    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassword();

});

function checkFirstName() {
    const first = document.getElementById("fname");

    if (first.value.length == 0) {
        first.style.borderColor = "hsl(0, 100%, 74%)";
        document.getElementById("fname-invalid").innerHTML = "First Name cannot be empty";
        document.getElementById("error1").style.visibility = "visible";

        event.preventDefault();
    } else {
        first.style.borderColor = "#E1E1E1";
        document.getElementById("fname-invalid").innerHTML = "";
        document.getElementById("error1").style.visibility = "hidden";

    }
}

function checkLastName() {
    const last = document.getElementById("lname");
    
    if (last.value.length == 0){
        last.style.borderColor= "hsl(0, 100%, 74%)";
        document.getElementById("lname-invalid").innerHTML = "Last name cannot be empty";
        document.getElementById("error2").style.visibility="visible";
        
        event.preventDefault();
    } else {
        last.style.borderColor = "#E1E1E1";
        document.getElementById("lname-invalid").innerHTML = "";
        document.getElementById("error2").style.visibility="hidden";
    }
}


function checkEmail() {
    const email = document.getElementById("email");
    
    if (email.value.length == 0 || !email.checkValidity()) {
        email.style.borderColor= "hsl(0, 100%, 74%)";
        document.getElementById("email-invalid").innerHTML = "Looks like this is not an email";
        document.getElementById("error3").style.visibility="visible";
        
        event.preventDefault();
    } else {
        email.style.borderColor = "#E1E1E1";
        document.getElementById("email-invalid").innerHTML = "";
        document.getElementById("error3").style.visibility="hidden";
    }      
}

function checkPassword() {
    const pass = document.getElementById("pwd");
    
    if (pass.value.length == 0){
        pass.style.borderColor="hsl(0, 100%, 74%)";
        document.getElementById("pass-invalid").innerHTML="Password cannot be empty"
        document.getElementById("error4").style.visibility="visible";
        
        event.preventDefault();
    } else {
        pass.style.borderColor = "#E1E1E1";
        document.getElementById("pass-invalid").innerHTML="";
        document.getElementById("error4").style.visibility="hidden";
    }
}


