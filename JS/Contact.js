function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 5) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 14) {
        text = "Please Enter More Than 14 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}

const cont = document.querySelector('#cont');
const form = document.querySelector('#myform');

// create element & render staff
function renderContact(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let subject = document.createElement('span');
    let email = document.createElement('span');
    let message = document.createElement('span');
    let phone = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    subject.textContent = doc.data().subject;
    email.textContent = doc.data().email;
    message.textContent = doc.data().message;
    phone.textContent = doc.data().phone;

    li.appendChild(name);
    li.appendChild(subject);
    li.appendChild(email);
    li.appendChild(message);
    li.appendChild(phone);

    cont.appendChild(li);

}

// getting data
Contact.collection('Contact').orderBy('Name').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderContact(doc);
    });
});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    Contact.collection('Contact').add({
        name: form.name.value,
        subject: form.subject.value,
        phone: form.phone.value,
        email: form.email.value,
        message: form.message.value
    });
    form.name.value = '';
    form.subject.value = '';
    form.phone.value = '';
    form.email.value = '';
    form.message.value = '';
})