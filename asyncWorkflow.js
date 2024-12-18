/**
 * Workflow Description:
 * 
 * This workflow simulates user registration, email verification, login, 
 * and a welcome message display using asynchronous tasks. Each step 
 * has a 1-second delay. Errors are handled by passing error messages 
 * between functions and stopping the workflow upon failure.
 * 
 * Functions:
 * 1. registerUser: Simulates user registration.
 * 2. sendVerification: Simulates sending a verification email.
 * 3. loginUser: Simulates logging in the user.
 * 4. displayWelcomeMessage: Simulates displaying a welcome message.
 */

function registerUser(callback) {
    setTimeout(() => {
        console.log("Registering user...");
        const isSuccess = Math.random() < 0.8; 
        if (isSuccess) {
            console.log("User registered successfully!");
            callback(null, "User123"); 
        } else {
            callback("Error: Registration failed");
        }
    }, 1000);
}

function sendVerification(userId, callback) {
    setTimeout(() => {
        console.log(`Sending verification email to ${userId}...`);
        const isSuccess = Math.random() < 0.8;
        if (isSuccess) {
            console.log("Verification email sent!");
            callback(null, userId); 
        } else {
            callback("Error: Verification email failed"); 
        }
    }, 1000);
}

function loginUser(userId, callback) {
    setTimeout(() => {
        console.log(`Logging in user ${userId}...`);
        const isSuccess = Math.random() < 0.8; 
        if (isSuccess) {
            console.log("User logged in successfully!");
            callback(null, userId); 
        } else {
            callback("Error: Login failed");
        }
    }, 1000);
}

function displayWelcomeMessage(userId, callback) {
    setTimeout(() => {
        console.log(`Welcome, ${userId}!`);
        callback(null, "Workflow completed successfully!");
    }, 1000);
}

registerUser((err, userId) => {
    if (err) {
        console.error(err);
        return; 
    }
    sendVerification(userId, (err, verifiedUserId) => {
        if (err) {
            console.error(err);
            return; 
        }
        loginUser(verifiedUserId, (err, loggedInUserId) => {
            if (err) {
                console.error(err);
                return;
            }
            displayWelcomeMessage(loggedInUserId, (err, successMessage) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(successMessage);
                }
            });
        });
    });
});