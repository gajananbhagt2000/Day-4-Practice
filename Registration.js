const Registration = document.getElementById("Registration");



Registration.addEventListener("submit", register);


function register() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var contactNumber = document.getElementById("contactNumber").value;


    if (password !== confirmPassword) {
        const error = document.getElementById("error");
        error.innerText = "Password not matching";
        return;
    }


    alert("Registration Successful...");
    window.location.href = "IndexLogin.html";
};
