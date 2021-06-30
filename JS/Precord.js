const Pr = document.querySelector('#Pr');
const form = document.querySelector('#Precord-form');

// create element & render Precord
function renderPrecord(doc) {
    let li = document.createElement('li');
    let name = document.createElement('span');
    let age = document.createElement('span');
    let dob = document.createElement('span');
    let number = document.createElement('span');
    let add = document.createElement('span');
    let email = document.createElement('span');
    let history = document.createElement('span');
    let proxy = document.createElement('span');
    let room = document.createElement('span');
    let doa = document.createElement('span');
    let released = document.createElement('span');
    let dor = document.createElement('span');
    let cname = document.createElement('span');
    let pnum = document.createElement('span');
    let doe = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    age.textContent = doc.data().age;
    dob.textContent = doc.data().dob;
    number.textContent = doc.data().number;
    add.textContent = doc.data().add;
    email.textContent = doc.data().email;
    history.textContent = doc.data().history;
    proxy.textContent = doc.data().proxy;
    room.textContent = doc.data().room;
    doa.textContent = doc.data().doa;
    released.textContent = doc.data().released;
    dor.textContent = doc.data().dor;
    cname.textContent = doc.data().cname;
    pnum.textContent = doc.data().pnum;
    doe.textContent = doc.data().doe;

    li.appendChild(name);
    li.appendChild(age);
    li.appendChild(dob);
    li.appendChild(number);
    li.appendChild(add);
    li.appendChild(email);
    li.appendChild(history);
    li.appendChild(proxy);
    li.appendChild(room);
    li.appendChild(doa);
    li.appendChild(released);
    li.appendChild(dor);
    li.appendChild(cname);
    li.appendChild(pnum);
    li.appendChild(doe);

    Pr.appendChild(li);
}

// getting data
Precord.collection('Patient record').orderBy('name').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderPrecord(doc);
    });
});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    Precord.collection('Patient record').add({
        name: form.name.value,
        age: form.age.value,
        dob: form.dob.value,
        number: form.number.value,
        add: form.add.value,
        email: form.email.value,
        history: form.history.value,
        proxy: form.proxy.value,
        room: form.room.value,
        doa: form.doa.value,
        released: form.released.value,
        dor: form.dor.value,
        cname: form.cname.value,
        pnum: form.pnum.value,
        doe: form.doe.value
    });

    form.name.value = '';
    form.age.value = '';
    form.dob.value = '';
    form.number.value = '';
    form.add.value = '';
    form.email.value = '';
    form.history.value = '';
    form.proxy.value = '';
    form.room.value = '';
    form.doa.value = '';
    form.released.value = '';
    form.dor.value = '';
    form.cname.value = '';
    form.pnum.value = '';
    form.doe.value = '';
});

// real-time listener
// Precord.collection('Patient record').orderBy('name').onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//         console.log(change.doc.data());
//         if (change.type == 'added') {
//             renderPrecord(change.doc);
//         } else if (change.type == 'removed') {
//             let li = schedule.querySelector('[data-id=' + change.doc.id + ']');
//             schedule.removeChild(li);
//         }
//     });
// });