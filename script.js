// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBON8X1QGe22oQeY-hqmvTACUQaOXqyX1E",
    authDomain: "sera-agtrace.firebaseapp.com",
    projectId: "sera-agtrace",
    storageBucket: "sera-agtrace.appspot.com",
    messagingSenderId: "807856824701",
    appId: "1:807856824701:web:e18fd298a26d88bb2bac14",
    measurementId: "G-C7X4VNSD6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Handle form submission
document.getElementById("contactForm").addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (username && email && message) {
        set(ref(db, 'user/' + username), {
            username: username,
            Email: email,
            message: message
        })
        .then(() => {
            alert("Message successfully sent!");
            document.getElementById("contactForm").reset();
        })
        .catch((error) => {
            alert("Failed to send message: " + error.message);
        });
    } else {
        alert("Please fill out all fields.");
    }
});
