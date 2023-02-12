class Validator {
    static REQUIRED = "REQUIRED";
    static MIN_LENGTH = "MIN_LENGTH"
    static validate(value, flag, validatorValue) {
        if (flag === this.REQUIRED) {
            return value.trim().length > 0;
        } if (flag === this.MIN_LENGTH) {
            return value.trim().length >  validatorValue
        }
    }
}


class User {
    constructor(uName, pPassword) {
        this.uName = uName;
        this.pPassword = pPassword
    }
    greet() {
        console.log('Hi i am ' + uName )
    }

}
class UserinputForm {
    constructor() {
        this.form = document.createElement('user-input'); // property base
        this.userNameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');
        this.form.addEventListener('submit', this.signUpHandler.bind(this))
        // bind will ponit down  to signUpHandler function 
    }

    signUpHandler(e) {
        e.preventDefault();
        const enteredUserName = this.userNameInput.value;
        const enteredUserPassword = this.passwordInput.value;
        if (!Validator.validate(enteredUserName, Validator.REQUIRED) || !Validator.validate(enteredUserPassword, Validator.MIN_LENGTH)) {
            alert("invaid input password and username is worng")
            return;
        }
        const newUser = new User(enteredUserName, enteredUserPassword)
        console.log(newUser)
        newUser.greet()
    }

}

new User;