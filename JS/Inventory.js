const datalist = document.querySelector('#Data');
const form = document.querySelector('#InputData');

// Create element & render Appointments
function renderInventories(doc) {
    let li = document.createElement('li');
    let Item_Name = document.createElement('span');
    let Item_Count = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    Item_Name.textContent = doc.data().Item_Name;
    Item_Count.textContent = doc.data().Item_Count;
    cross.textContent = 'x';

    li.appendChild(Item_Name);
    li.appendChild(Item_Count);
    li.appendChild(cross);

    datalist.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        dbi.collection('Inventory').doc(id).delete();
    });
}

// getting data
// db.collection('Inventory').get().then(snapshot => {
// snapshot.docs.forEach(doc => {
// renderInventories(doc);
// });
// });

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    dbi.collection('Inventory').add({
        Item_Name: form.Item_Name.value,
        Item_Count: form.Item_Count.value
        
    });
    form.Item_Name.value = '';
    form.Item_Count.value = '';
    
})

// real-time listener
dbi.collection('Inventory').orderBy('Item_Name').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        // console.log(change.doc.data());
        if (change.type == 'added') {
            renderInventories(change.doc);
        } else if (change.type == 'removed') {
            let li = datalist.querySelector('[data-id=' + change.doc.id + ']');
            datalist.removeChild(li);
        }
    });
});