let regForm = document.querySelector('.registration-form');
let loginForm = document.querySelector('.login-form'); 

let fullNamevalue = document.getElementById('full_name');
let emailValue = document.getElementById('email');
let passwordValue = document.getElementById('password');
let countryValue = document.getElementById('country');


let usernameValue = document.getElementById('username');
let loginPasswordValue = document.getElementById('login-password');

let fullNameErr = document.getElementById('full_nameErr');
let emailErr = document.getElementById('emailErr');
let passwordErr = document.getElementById('passwordErr');
let countryErr = document.getElementById('countryErr');


let usernameErr = document.getElementById('usernameErr');
let loginPasswordErr = document.getElementById('login_passwordErr');


if (regForm) {
    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validateRegForm();
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validateLoginForm();
    });
}


function validateRegForm() {
    let isValid = true;

    if (!fullNamevalue || fullNamevalue.value.trim() === "") {
        fullNameErr.innerHTML = 'Please enter your full name';
        fullNameErr.classList.add('error-message');
        isValid = false;
    }

    if (!emailValue || emailValue.value.trim() === "") {
        emailErr.innerHTML = 'Please input an existing email';
        emailErr.classList.add('error-message');
        isValid = false;
    }

    if (!passwordValue || passwordValue.value.trim() === "") {
        passwordErr.innerHTML = 'Please input password';
        passwordErr.classList.add('error-message');
        isValid = false;
    } else if (passwordValue.value.length < 8) {
        passwordErr.innerHTML = 'Password must be at least 8 characters long';
        passwordErr.classList.add('error-message');
        isValid = false;
    }

    if (!countryValue || countryValue.value.trim() === "") {
        countryErr.innerHTML = 'Please enter your country';
        countryErr.classList.add('error-message');
        isValid = false;
    }

    if (isValid) {
        alert("Registration successful!");
        regForm.reset();
    }
}

function validateLoginForm() {
    let isValid = true;

    if (!usernameValue || usernameValue.value.trim() === "") {
        usernameErr.innerHTML = 'Please enter your username';
        usernameErr.classList.add('error-message');
        isValid = false;
    }

    if (!loginPasswordValue || loginPasswordValue.value.trim() === "") {
        loginPasswordErr.innerHTML = 'Please input your password';
        loginPasswordErr.classList.add('error-message');
        isValid = false;
    }

    if (isValid) {
        alert("Login successful!");
        loginForm.reset();
    }
}

function clearErrors(input, errorElement) {
    input.addEventListener('focus', () => {
        errorElement.innerHTML = '';
        errorElement.classList.remove('error-message');
    });
}

if (regForm) {
    clearErrors(fullNamevalue, fullNameErr);
    clearErrors(emailValue, emailErr);
    clearErrors(passwordValue, passwordErr);
    clearErrors(countryValue, countryErr);
}

if (loginForm) {
    clearErrors(usernameValue, usernameErr);
    clearErrors(loginPasswordValue, loginPasswordErr);
}







// let regForm = document.querySelector('.registration-form');
// let loginForm = document.querySelector('.login-form');
// fullNamevalue = document.getElementById('full_name');
// emailValue = document.getElementById('email');
// passwordValue = document.getElementById('password');
// countryValue = document.getElementById('country');

// usernamevalue = document.getElementById('username');
// loginPasswordvalue = document.getElementById('login-password');


// regForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     validateRegForm();
// });

// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     validateLoginForm();
// });

// function validateRegForm(){
//     if (fullNamevalue.value === "" || fullNamevalue.value === null){
//         full_nameErr.innerHTML = 'Please enter your Fullname';
//         full_nameErr.classList.add('error-message');

//         return false;
//     }
//     if (emailValue.value === "" || emailValue.value === null){
//         emailErr.innerHTML = 'Please input an existing email';
//         emailErr.classList.add('error-message');

//         return false;
//     }
//     if (passwordValue.value === "" || passwordValue.value === null){
//         passwordErr.innerHTML = 'Please input password';
//         passwordErr.classList.add('error-message');

//         return false;
//     }else if(passwordValue.value.length < 8){
//         passwordErr.innerHTML = 'Please password must be up to 8 characters';
//         passwordErr.classList.add('error-message');
//         return false;
//     }
//     if (countryValue.value === "" || countryValue.value === null){
//         countryErr.innerHTML = 'Please enter country';
//         countryErr.classList.add('error-message');

//         return false;
//     }
// };

// function validateLoginForm() {

//     if (usernameValue.value === '') {
//         usernameErr.innerHTML = 'Please enter your username';
//         usernameErr.classList.add('error-message');
//         return false;
//     }

//     if (loginPasswordValue.value === '') {
//         login_passwordErr.innerHTML = 'Please input your password';
//         login_passwordErr.classList.add('error-message');
//         return false;
//     }

// }


// function removeErr() {
    
//     fullNamevalue.addEventListener('focus', () => {
//         full_nameErr.innerHTML = '';
//         full_nameErr.classList.remove('error-message');
//     });

//     emailValue.addEventListener('focus', () => {
//         emailErr.innerHTML = '';
//         emailErr.classList.remove('error-message');
//     });

//     passwordValue.addEventListener('focus', () => {
//         passwordErr.innerHTML = '';
//         passwordErr.classList.remove('error-message');
//     });

//     countryValue.addEventListener('focus', () => {
//         countryErr.innerHTML = '';
//         countryErr.classList.remove('error-message');
//     });
// }

// removeErr();