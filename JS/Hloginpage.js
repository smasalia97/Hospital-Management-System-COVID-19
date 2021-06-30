//login 
const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info

    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        window.location.href = "HHomepage.html";
        console.log(cred);
    })

    // firebase.auth().onAuthStateChanged(function(user) {
    // if (User) {
    //    window.location.href ="HHomepage.html";
    // } else {
    // console.log("Sign out")
    // }
    // })
})