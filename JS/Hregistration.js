const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e) => {
// let messages = []
// if (username.value == '' || username.value == null) {
// messages.push('Name is required')
// }

// if (password.value.length <= 6) {
//     messages.push('Password must be longer than 6 characters')
// }

// if (password.value.length >= 20) {
//     messages.push('Password must be less than 20 characters')
// }

// if (password.value === 'password') {
//     messages.push('Password cannot be password')
// }

// if (password.value === password2.value) {
// messages.push('Password do not match')
// }

// if (messages.length > 0) {
// e.preventDefault()
// errorElement.innerText = messages.join(', ')
// }
// })

const signupform = document.querySelector("#form");
signupform.addEventListener('submit', (e) => {

    e.preventDefault();

    //get user info
    const email = signupform['signup-email'].value;
    const username = signupform['signup-username'].value;
    const password1 = signupform['signup-password1'].value;
    const password2 = signupform['signup-password2'].value;

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password2).then(cred => {
        window.location.href = "HHomepage.html";
        console.log(cred);
    })

    // saving data
    Hr.collection('Hregistration').add({
        Hospital_Name: signupform.Hname.value,
        Health_Care_Provider: signupform.HCP.value,
        Hospital_Registration_Number: signupform.HRno.value,
        Address: signupform.Address.value,
        State: signupform.State.value,
        District: signupform.Dist.value,
        Sub_District: signupform.SubDist.value,
        Town: signupform.Town.value,
        Village: signupform.Village.value,
        Pin_Code: signupform.PC.value,
        Contact: signupform.Contact.value,
        Emergency_number: signupform.G.value,
        Hospital_Primary_Email_Id: signupform.Email_id1.value,
        Hospital_Secondary_Email_Id: signupform.Email_id2.value,
        website: signupform.web.value,
        Ambulance_Phone_No: signupform.Ano.value,
        MEDICAL_INSURANCE: signupform.MI.value,
    });
    signupform.Hname.value = '';
    signupform.HCP.value = '';
    signupform.HRno.value = '';
    signupform.Address.value = '';
    signupform.State.value = '';
    signupform.Dist.value = '';
    signupform.SubDist.value = '';
    signupform.Town.value = '';
    signupform.Village.value = '';
    signupform.PC.value = '';
    signupform.Contact.value = '';
    signupform.G.value = '';
    signupform.Email_id1.value = '';
    signupform.Email_id2.value = '';
    signupform.web.value = '';
    signupform.Ano.value = '';
    signupform.MI.value = '';
    signupform.username.value = '';
    signupform.email.value = '';
    signupform.password1.value = '';
    signupform.password2.value = '';

});