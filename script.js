// Check if the user is logged in
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html"; // Redirect to login if not logged in
}

// If you want to handle logout, you can do it here as well
function handleLogout() {
    localStorage.removeItem("isLoggedIn");  // Remove the login flag
    window.location.href = "login.html"; // Redirect to login page

    // Function for handling login and username/password validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Username and password entered by the user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Define the correct username and password (In a real app, this should be checked against the server)
    const correctUsername = "user"; // Replace with your username
    const correctPassword = "yourPassword"; // Replace with your password

    // Validate the username and password
    if (username === correctUsername && password === correctPassword) {
        // If both are correct, set logged-in flag
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";  // Redirect to the dashboard (index.html)
    } else {
        // If either username or password is incorrect, show an alert
        alert("Invalid username or password! Please try again.");
    }
    // Function for handling login and username/password validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Username and password entered by the user
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Define the correct username and password (In a real app, this should be checked against the server)
    const correctUsername = "user"; // Replace with your username
    const correctPassword = "yourPassword"; // Replace with your password

    // Validate the username and password
    if (username === correctUsername && password === correctPassword) {
        // If both are correct, set logged-in flag
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "splash.html";  // Redirect to splash page first
    } else {
        // If either username or password is incorrect, show an alert
        alert("Invalid username or password! Please try again.");
    }
});

// Display Image in the Gallery
function displayImage(url) {
    const photoGrid = document.getElementById('photoGrid');
    const imageElement = document.createElement('div');
    imageElement.classList.add('gallery-item');
    imageElement.innerHTML = `<img src="${url}" alt="Uploaded Photo">`;
    photoGrid.appendChild(imageElement);
}

// Display Video in the Gallery
function displayVideo(url) {
    const videoGrid = document.getElementById('videoGrid');
    const videoElement = document.createElement('div');
    videoElement.classList.add('gallery-item');
    videoElement.innerHTML = `<video controls><source src="${url}" type="video/mp4"></video>`;
    videoGrid.appendChild(videoElement);
}
});

}
