const appointment = document.querySelector('#Appointment');
const form = document.querySelector('#InputAppointment');

// Create element & render Appointments
function renderAppointments(doc) {
    let li = document.createElement('li');
    let Patient_Name = document.createElement('span');
    let Doctor_Name = document.createElement('span');
    let Date = document.createElement('spans');
    let Time = document.createElement('spans');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    Patient_Name.textContent = doc.data().Patient_Name;
    Doctor_Name.textContent = doc.data().Doctor_Name;
    Date.textContent = doc.data().Date;
    Time.textContent = doc.data().Time;
    cross.textContent = 'x';

    li.appendChild(Patient_Name);
    li.appendChild(Doctor_Name);
    li.appendChild(Date);
    li.appendChild(Time);
    li.appendChild(cross);

    appointment.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('Patient_Appointments').doc(id).delete();
    });
}

// getting data
// db.collection('Patient_Appointments').get().then(snapshot => {
// snapshot.docs.forEach(doc => {
// renderPatient_Appointments(doc);
// });
// });

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Patient_Appointments').add({
        Patient_Name: form.Patient_Name.value,
        Doctor_Name: form.Doctor_Name.value,
        Date: form.Date.value,
        Time: form.Time.value
    });
    form.Patient_Name.value = '';
    form.Doctor_Name.value = '';
    form.Date.value = '';
    form.Time.value = '';
})

// real-time listener
db.collection('Patient_Appointments').orderBy('Patient_Name').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        // console.log(change.doc.data());
        if (change.type == 'added') {
            renderAppointments(change.doc);
        } else if (change.type == 'removed') {
            let li = appointment.querySelector('[data-id=' + change.doc.id + ']');
            appointment.removeChild(li);
        }
    });
});