let error = document.querySelectorAll("span");
let btnSubmit = document.getElementById("btn-login");

let validate = function(e)
{
    e.preventDefault();
    //Disini kita ambil semua elemen input yang ada
    let username = document.getElementById("usernameTxt");
    let password = document.getElementById("passwordTxt");
    let result = true;

    if(username.value.length == 0)
    {
        error[0].innerHTML = "Username must be entered!";
        result = false;
        return;
    }
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
    if(password.value.length < 8 || password.value.length > 15)
    {
        error[1].innerHTML = "Password must be 8 - 15 characters!";
        result = false;
        return;
    }
    if(result)
    {
        username.value = "";
        password.value = "";
        alert("Success To Login!");
    }
}
btnSubmit.addEventListener("click", e => validate(e));