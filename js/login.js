var toHome = function () {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var loginform = document.getElementById("loginform")
      
    if (email.value === "kiki@gmail.com" && password.value === "kiki"){
        window.location.href = "./home.html"
    } else {
       ldi.className = "display"
       setTimeout(function(){ ldi.className = ldi.className.replace("display", ""); }, 3000);
       loginform.className = "vibrate"
       setTimeout(function(){ loginform.className = loginform.className.replace("vibrate", ""); }, 3000);
    }          
}
var displayVerify = function () {
    document.getElementById("verifyaccount").style.display = "block"
}

var closeVerifyAccount = function () {
    document.getElementById("verifyaccount").style.display = "none"
}
var toVerifyAccount =function () {
    var verify = document.getElementById("ve")
    var done = document.getElementById("done")
    var confirmEmail = document.getElementById("ce")
    var toast = document.getElementById("toast")
        if( confirmEmail.value === "kiki@gmail.com"){
        window.location.href = "./verify.html"
    } else {
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
        verify.className = "vibe"
       setTimeout(function(){ verify.className = verify.className.replace("vibe", ""); }, 3000);
    }
}

