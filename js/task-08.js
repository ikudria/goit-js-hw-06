
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formDataElements = {
        mail,
        password,
    }

    if (mail === '' || password === '') {
        return alert(`All fields must be filled in`)
    }
    console.log(formDataElements);    
    event.currentTarget.reset();    


}