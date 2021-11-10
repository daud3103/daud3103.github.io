let error = document.querySelectorAll("span");
let btnSubmit = document.getElementById("btn-login");
let validate = function(e)
{
    e.preventDefault();
    let email = document.getElementById("emailTxt");
    let username = document.getElementById("userTxt");
    let area = document.getElementById("areaTxt");
    let result = true;

    if(email.value.length == 0)
    {
        error[0].innerHTML = "Email must be entered!";
        result = false;
        return;
    }
    else error[0].innerHTML = "";
    if(!email.value.includes("@"))
    {
        error[0].innerHTML = "Email must contain '@'";
        result = false;
        return;
    }
    else error[0].innerHTML = "";

    if(email.value.indexOf("@") != email.value.lastIndexOf("@"))
    {
        error[0].innerHTML = "Email must only containt one '@'";
        result = false;
        return;
    }
    else error[0].innerHTML = "";
    
    if(!email.value.endsWith(".com") && !email.value.endsWith(".com"))
    {
        error[0].innerHTML = "Email must be end with '.com'";
        result = false;
        return;
    }
    else error[0].innerHTML = "";
    
    if(username.value.length == 0)
    {
        error[1].innerHTML = "Username must be entered!";
        result = false;
        return;
    }
    else error[1].innerHTML = "";

    if(username.value.length < 5 || username.value.length > 15)
    {
        error[1].innerHTML = "Username must be between 5 - 15 characters!";
        result = false;
        return;
    } 
    else error[1].innerHTML = "";
    
    if(area.value.length == 0)
    {
        error[2].innerHTML = "Message must be Filled!";
        result = false;
        return;
    }
    
    if(result)
    {
        username.value = "";
        email.value = "";
        area.value = "";
        alert("You've been give feedback thankyou!");
    }

}
btnSubmit.addEventListener("click", e => validate(e));