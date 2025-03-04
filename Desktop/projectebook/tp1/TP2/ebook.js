document.addEventListener("DOMContentLoaded", function() {
    google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID", // Replace with your actual Google Client ID
        callback: handleCredentialResponse
    });

    document.getElementById("google-login").addEventListener("click", function() {
        google.accounts.id.prompt(); // Opens the Google sign-in prompt
    });
});

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    alert("Google login successful!");
    // You can send this token to your backend for authentication
}