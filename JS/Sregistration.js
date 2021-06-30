const signupform = document.querySelector("#form");
signupform.addEventListener('submit', (e) => {

    e.preventDefault();

    //get user info
    const email = signupform['signup-email'].value;
    const password1 = signupform['signup-password1'].value;
    const password2 = signupform['signup-password2'].value;

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password2).then(cred => {
        window.location.href = "HMS.html";
        console.log(cred);
    })

    // saving data
    Sr.collection('Sregistration').add({
        Name: signupform.name.value,
        gender: signupform.Gender.value,
        Date_Of_Birth: signupform.dob.value,
        Address: signupform.Address.value,

    });
    signupform.name.value = '';
    signupform.Gender.value = '';
    signupform.dob.value = '';
    signupform.Address.value = '';
    email = '';
    password1 = '';
    password2 = '';

});