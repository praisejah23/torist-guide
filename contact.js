let form = document.querySelector('.form');
nameValue = document.getElementById('name');
emailValue = document.getElementById('email');
subjectValue = document.getElementById('subject');
messageValue = document.getElementById('message');


form.addEventListener ('submit', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm(){
    if (nameValue.value === "" || nameValue.value === null){
        nameErr.innerHTML = 'Please enter your name';
        nameErr.classList.add('error-message');

        return false;
    }
    if (emailValue.value === "" || emailValue.value === null){
        emailErr.innerHTML = 'Please input an existing email';
        emailErr.classList.add('error-message');

        return false;
    }
    if (subjectValue.value === "" || subjectValue === null){
        subjectErr.innerHTML = 'Please enter a subject';
        subjectErr.classList.add('error-message');

        return false;
    }    
    if (messageValue.value === "" || messageValue === null){
        messageErr.innerHTML = 'Please enter message';
        messageErr.classList.add('error-message');

        return false;
    }
}

function removeErr() {
    
    nameValue.addEventListener('focus', () => {
        nameErr.innerHTML = '';
        nameErr.classList.remove('error-message');
    });

    emailValue.addEventListener('focus', () => {
        emailErr.innerHTML = '';
        emailErr.classList.remove('error-message');
    });

    subjectValue.addEventListener('focus', () => {
        subjectErr.innerHTML = '';
        subjectErr.classList.remove('error-message');
    });

    messageValue.addEventListener('focus', () => {
        messageErr.innerHTML = '';
        messageErr.classList.remove('error-message');
    });
}

removeErr();


// function removeErr(){
//     name.onfocus = () =>{
//    nameErr.innerHTML= '';
//     }
// }
// removeErr()