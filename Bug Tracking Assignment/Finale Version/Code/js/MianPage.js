function Linked(EmailEnter, PasswordEnter){

    //check if the Email and Password entered exists inside the local storage
    if ((EmailEnter == "1") & (PasswordEnter == "1")) {
        location.href = "http://127.0.0.1:5500/SecondPage.html";
    }
    else
    {
            alert("Wrong Password or Email");
    }

    console.log(EmailEnter, PasswordEnter)
}


//Add user to the local Storage
function AddUser(EmailEnter, PasswordEnter){
    if (window.localStorage.getItem(EmailEnter) !== null) {
        alert("Email address Exists");
    }
    else if (EmailEnter == "" || PasswordEnter == "") {
        alert("Please enter a Email and Password")
    }
    else
    {
        window.localStorage.setItem(EmailEnter, PasswordEnter)
        alert("Email Saved")
    }
}
        