let error = document.querySelectorAll("span");
let btnSubmit = document.getElementById("btn-submit");

let validate = function(e)
{
    e.preventDefault();
    let textarea = document.getElementById("textarea");
    let result = true;

    if(textarea.value.length == 0)
    {
        error[0].innerHTML = "Comment must be filled!";
        result = false;
        return;
    }

    if(result)
    {
        textarea.value = "";
        alert("Your Comments Have Recorded!");
    }
}
btnSubmit.addEventListener("click", e => validate(e));