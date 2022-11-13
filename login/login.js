var TurnToLogin = () => {
    document.getElementById('login').style.display = "block";
    document.getElementById('register').style.display = "none";
}
var TurnToRegister = () => {
    document.getElementById('register').style.display = "block";
    document.getElementById('login').style.display = "none";
}


function validateForm() {

    var x = document.getElementById("email").value;
    
    var atpos = x.indexOf("@");
    
    var dotpos = x.lastIndexOf(".");
    
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    
    alert("不是一個有效的 e-mail 地址");
    
    return false;
    
    }
    
    }


function checkUser() {
    var result = document.getElementById("loginname").value;
    var password = document.getElementById("loginpwd").value;
    if (result != "root" || password != "123456") {
        window.alert("使用者名稱或密碼不正確：內建使用者名稱root，密碼123456");
        return false;
    } 
    else {
        return true;
    }
    }