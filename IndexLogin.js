const login = document.getElementById("loginForm");



login.addEventListener("submit", login)


function login() {
  
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   
    if (username === "Gajanan" && password === "Gajanan@123") {
       
        window.location.href = "student.html";
    } else {
       
        document.getElementById("error").innerText = "Please Enter valid credentials..";
    }
};
