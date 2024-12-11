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









const canvas = document.getElementById('rainfall');
const ctx = canvas.getContext('2d');

// Set canvas size to match window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to store the raindrops
const raindrops = [];

// Function to create a new raindrop
function createRaindrop() {
    const x = Math.random() * canvas.width;
    const y = -5;
    const speed = Math.random() * 5 + 2;
    const length = Math.random() * 20 + 10;

    raindrops.push({ x, y, speed, length });
}

// Function to update the raindrops' positions
function updateRaindrops() {
    for (let i = 0; i < raindrops.length; i++) {
        const raindrop = raindrops[i];

        raindrop.y += raindrop.speed;

        if (raindrop.y > canvas.height) {
            raindrops.splice(i, 1);
            i--;
        }
    }
}

// Function to draw the raindrops
function drawRaindrops() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;

    for (let i = 0; i < raindrops.length; i++) {
        const raindrop = raindrops[i];

        ctx.beginPath();
        ctx.moveTo(raindrop.x, raindrop.y);
        ctx.lineTo(raindrop.x, raindrop.y + raindrop.length);
        ctx.stroke();
    }
}

// Function to animate the raindrops
function animate() {
    createRaindrop();
    updateRaindrops();
    drawRaindrops();

    requestAnimationFrame(animate);
}

// Start the animation
animate();


