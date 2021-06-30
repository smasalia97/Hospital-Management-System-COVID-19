const Pr = document.querySelector('#Patient-list');
const Prd = document.querySelector('#Patient-list');

// create element & render patient
function renderDetails(doc) {
    let ul = document.createElement('li');
    let name = document.createElement('span');
    let downarrow = document.createElement('div');

    ul.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    downarrow.textContent = '\\/';

    ul.appendChild(name);
    ul.appendChild(downarrow);

    Pr.appendChild(ul);

    downarrow.addEventListener('click', (e) => {
        // e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id', doc.id);
        Precord.collection('Patient record').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                renderPrecord(doc);
            });
        });
    });
}

function renderPrecord(doc) {
    let li = document.createElement('li');
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

    Prd.appendChild(li);
}

// getting data
Precord.collection('Patient record').orderBy('name').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderDetails(doc);
    });
});