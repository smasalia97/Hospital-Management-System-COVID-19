const schedule = document.querySelector('#Schedule');
const form = document.querySelector('#InputSchedule');

// create element & render staff
function renderStaff(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let place = document.createElement('span');
    let dateAndTime = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    place.textContent = doc.data().place;
    dateAndTime.textContent = doc.data().dateAndTime;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(place);
    li.appendChild(dateAndTime);
    li.appendChild(cross);

    schedule.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('Staff Schedule').doc(id).delete();
    });
}

//getting data
// db.collection('Staff Schedule').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderStaff(doc);
//     });
// });

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Staff Schedule').add({
        name: form.name.value,
        place: form.place.value,
        dateAndTime: form.dateAndTime.value
    });
    form.name.value = '';
    form.place.value = '';
})

// real-time listener
db.collection('Staff Schedule').orderBy('name').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if (change.type == 'added') {
            renderStaff(change.doc);
        } else if (change.type == 'removed') {
            let li = schedule.querySelector('[data-id=' + change.doc.id + ']');
            schedule.removeChild(li);
        }
    });
});