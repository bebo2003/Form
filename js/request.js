var FullName = document.getElementById("FullName");
var PhoneNumber = document.getElementById("PhoneNumber");
var Email = document.getElementById("Email");
var Password = document.getElementById("Password");
var EmailLogin = document.getElementById("EmailLogin");
var passwordLogin = document.getElementById("passwordLogin");


// Initialize array
var Array = [];

// Load existing users from localStorage
if (localStorage.getItem("Array") != null) {
    Array = JSON.parse(localStorage.getItem("Array"));
}
for (let i = 0; i < Array.length; i++) {

    var bebo = Array[i].name;
    var Bebo = `<h3>Welcome ${bebo} 🖤</h3>

`
    document.getElementById("demo").innerHTML = Bebo;
}


function Login() {
    var inputs = {


        EmailLogin: EmailLogin.value.trim().toLowerCase(),
        passwordLogin: passwordLogin.value.trim(),
    };
    if (!inputs.EmailLogin || !inputs.passwordLogin) {
        alert("All fields are required!");
        return;
    }
    const existingUser = Array.find(user => user.email === inputs.EmailLogin || user.password === inputs.passwordLogin);

    if (existingUser) {



        window.location.href = "request.html"; // Replace with your actual home page URL
    } else {
        alert("Invalid email or password. Please sign up if you don't have an account.");
    }

}







// Register function
function Register() {
    // Create user object
    var inputs = {
        name: FullName.value,
        phone: PhoneNumber.value.trim(),
        email: Email.value.trim().toLowerCase(),
        password: Password.value.trim(),
    };

    // Validate inputs
    if (!inputs.name || !inputs.phone || !inputs.email || !inputs.password) {
        alert("All fields are required!");
        return;
    }

    // Check if the email already exists
    const existingUser = Array.find(user => user.email === inputs.email);
    if (existingUser) {
        alert("Email already exists. Please try logging in.");
        ClearForm();
    } else {
        // Add the new user to the array
        Array.push(inputs);
        localStorage.setItem("Array", JSON.stringify(Array));
        alert("Sign-up successful! Please go back to the login page.");
        ClearForm();
    }

}


// Clear form inputs
function ClearForm() {
    FullName.value = "";
    PhoneNumber.value = "";
    Email.value = "";
    Password.value = "";
}


//  var cartona = `<p>Hello ${FullName.value} &#x2764;</p>`
// document.getElementById("demo").textContent = cartona;
// console.log(cartona);


// console.log(cartona);


