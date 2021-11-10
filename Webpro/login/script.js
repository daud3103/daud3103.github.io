let error = document.querySelectorAll("span");
let btnSubmit = document.getElementById("btn-submit");

let validate = function(e)
{
    e.preventDefault();
    let username = document.getElementById("usernameTxt");
    let password = document.getElementById("passwordTxt");
    let reConfPassword = document.getElementById("rePasswordTxt");
    let email = document.getElementById("emailTxt");
    let address = document.getElementById("addressTxt");
    let checkbox = document.getElementById("check-box");
    let birthday = document.getElementById("bdTxt");

    let result = true;

    if(username.value.length == 0)
    {
        error[0].innerHTML = "Username must be entered!";
        result = false;
        return;
    }
    else error[0].innerHTML = "";

    if(alphabetic(username)==false){
        error[0].innerHTML = "User Name must be Alphabetic"
    }
    else error[0].innerHTML = "";

    if(username.value.length < 5 || username.value.length > 15)
    {
        error[0].innerHTML = "Username must be between 5 - 15 characters!";
        result = false;
        return;
    } 
    else error[0].innerHTML = "";

    if(password.value.length == 0)
    {
        error[1].innerHTML = "Password must be entered!";
        result = false;
        return;
    }
    else error[1].innerHTML = "";
    
    if(password.value.length < 8 || password.value.length > 15)
    {
        error[1].innerHTML = "Password must be 8 - 15 characters!";
        result = false;
        return;
    }

    if(reConfPassword.value != password.value)
    {
        error[2].innerHTML = "Password must be the same!";
        result = false;
        return;
    }
    else error[2].innerHTML = "";
    
    if(email.value.length == 0)
    {
        error[3].innerHTML = "Email must be entered!";
        result = false;
        return;
    }
    else error[3].innerHTML = "";

    if(!email.value.includes("@"))
    {
        error[3].innerHTML = "Email must contain '@'";
        result = false;
        return;
    }
    else error[3].innerHTML = "";

    if(email.value.indexOf("@") != email.value.lastIndexOf("@"))
    {
        error[3].innerHTML = "Email must only containt one '@'";
        result = false;
        return;
    }
    else error[3].innerHTML = "";
    
    if(!email.value.endsWith(".com") && !email.value.endsWith(".com"))
    {
        error[3].innerHTML = "Email must be end with '.com'";
        result = false;
        return;
    }
    else error[3].innerHTML = "";

    if(birthday.value.length == 0)
    {
        error[4].innerHTML = "Birthday be filled!";
        result = false;
        return;
    }
    else error[4].innerHTML = "";

    if(address.value.length == 0)
    {
        error[5].innerHTML = "Address must be Filled!";
        result = false;
        return;
    }
    else error[5].innerHTML = "";

    if(!address.value.endsWith(" Street") && !address.value.endsWith(" street"))
    {
        error[5].innerHTML = "Address must be end with ' street'";
        result = false;
        return;
    }
    else error[5].innerHTML = "";

    if(!checkbox.checked)
    {
        error[6].innerHTML = "Terms and conditions must be agreed!";
        result = false;
        return;
    }
    else error[6].innerHTML = "";

    if(result)
    {
        username.value = "";
        password.value = "";
        reConfPassword.value = "";
        email.value = "";
        birthday.value ="";
        address.value = "";
        checkbox.checked = false;
        
        alert("Success created new account!");
    }

}
btnSubmit.addEventListener("click", e => validate(e));