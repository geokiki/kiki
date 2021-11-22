var toHome = function() {
    var fullname = document.getElementById("fullname")
    var username = document.getElementById("username")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var check = document.getElementById("check")
    var signupform = document.getElementById("signupform")

    if(
        fullname.value === "George Kiki"
        && username.value === "ynwdryice"
        && email.value === "kiki@gmail.com"
        && password.value === "kiki"
        && check.checked === "checked"){
            window.location.href = "./home.html"
        } else {
            signupform.className = "vibrate"
            setTimeout(function(){ signupform.className = signupform.className.replace("vibrate", ""); }, 3000);
        }
}