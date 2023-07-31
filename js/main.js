var accounts = []
var found
var index
if (localStorage.getItem("accounts") != null) {
    accounts = JSON.parse(localStorage.getItem("accounts"))
}
function check() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    if (accounts.length == 0) {
        return false
    }
    else {
        for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].email_obj == email && accounts[i].password_obj == password) {
                found = true
                index = i
                break
            }
            else {
                found = false
            }
        }
        if (found == true) {
            return true
        }
        else {
            return false
        }
    }
}
function login() {
    if (check()) {
        success()
    }
    else {
        document.getElementById('warning').innerHTML = "Wrong Password or Email"
    }
}
function signUpDisplay() {

    document.getElementById("home").innerHTML = `
    <div class="home-body text-center w-75 mx-auto mt-5 p-5">
            <h1 class="title mb-4">Smart Login System</h1>
            <input type="text" id="name" class="form-control mb-4 bg-transparent text-light" placeholder="Enter your name">
            <input type="text" id="sign_email" class="form-control mb-4 bg-transparent text-light" placeholder="Enter your email">
            <input type="password" id="sign_password" class="form-control mb-4 bg-transparent text-light" placeholder="Enter your password">
            <h5 id="succses" class="mb-4 text-success"></h5>
            <button class="form-control mb-4 bg-transparent login" onclick="signUp()">Sign Up</button>
            <p class="text-light">You have an account? <span ><button class="text-light text-decoration-none bg-transparent border-0 signLink" onclick="signInDisplay()" >Sign In</button></span></p>
        </div>
    `
}
function signUp() {
    var obj = {
        name_obj: document.getElementById("name").value,
        email_obj: document.getElementById("sign_email").value,
        password_obj: document.getElementById("sign_password").value,
    }
    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].email_obj == document.getElementById("sign_email").value) {
            found = true
            break
        }
        else {
            found = false
        }
    }
    if (found == true) {
        document.getElementById("succses").innerHTML = "Email is already exist"
    }
    else {
        accounts.push(obj)
        localStorage.setItem('accounts', JSON.stringify(accounts))
        document.getElementById("succses").innerHTML = "Sucess"
    }

}

function success() {
    document.getElementById("home").innerHTML = `
    <div class="bar py-4">
    <div class="container d-flex justify-content-between">
        <h3 class="text-light">SMART LOGIN</h3>
        <button class="btn bg-transparent signup" onclick="signInDisplay()" >Logout</button>
    </div>
</div>
<div class="middle w-75 mx-auto py-5 text-center text-light ">
    <h1>Welcome ${accounts[index].name_obj}</h1>
  </div>
    `
}
function signInDisplay() {
    document.getElementById("home").innerHTML = `
    <div class="home-body text-center w-75 mx-auto mt-5 p-5">
    <h1 class="title mb-4">Smart Login System</h1>
    <input type="text" id="email" class="form-control mb-4 bg-transparent text-light" placeholder="Enter your email">
    <input type="password" id="password" class="form-control mb-4 bg-transparent text-light" placeholder="Enter your password">
    <h5 id="warning" class="mb-4 text-danger"></h5>
    <button class="form-control mb-4 bg-transparent login" onclick="login()">Login</button>
    <p class="text-light">Don’t have an account? <span ><button class="text-light text-decoration-none bg-transparent border-0 signLink" onclick="signUpDisplay()" >Sign Up</button></span></p>
</div>
    `
}
