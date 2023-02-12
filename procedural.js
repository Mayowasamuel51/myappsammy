const form = document.getElementById('user-input');


function signUpHandler(event) {
    event.preventDefault();
    const userNameInput = document.getElementById('username')
    const passwordInput = document.getElementById('password')
    
    const enteredPassword = passwordInput.value;
    const enteredUsername = userNameInput.value;

    if (enteredUsername.trim().length === 0) {
        alert('invaid input  username is empty')
        return;
    }
    if (enteredPassword.trim().length <= 0) {
        alert('invaid input  password is short')
        return;
    }
    const user = {
        userName: enteredUsername,
        userPassword: enteredPassword  
    }
    console.log(user)

}

form.addEventListener('submit',signUpHandler)