//array vuoto

let users = [];

//prototipo di user
function user(name, lastname, city) {
    this.name = name;
    this.lastname = lastname;
    this.city = city;
}

//funzione per prendere i dati dal bottone

let addBtn = document.querySelector('#my_form button');
//applico evento click al bottone
addBtn.onclick = function(){
    //prende i valori inseriti negli appositi campi
    let name = document.querySelector('#my_form input[name="name"]');
    let lastname = document.querySelector('#my_form input[name="lastname"]');
    let city = document.querySelector('#my_form input[name="city"]');                                               
    //creo un obj user
    let obj = new user(name.value, lastname.value, city.value);
    //salvo l'obj all'interno dell'array
    users.push(obj);
    console.log(obj);
    //svuoto campi del form creato
    name.value = '';
    lastname.value = '';
    city.value = '';
    printUsers();

}

//la funzione deve stampare tutti gli utenti dentro l'array

function printUsers() {
    let ol = document.querySelector('#my_list ol');
    ol.innerHTML = '';
    users.forEach((u,i) => {
        let li = document.createElement('li');
        li.innerHTML = u.name + ' ' + u.lastname + ' (' + u.city + ')';
        let btn = document.createElement('button')
        btn.innerHTML = 'remove';
        btn.onclick = () => removeUser(i);
        li.appendChild(btn);
        ol.appendChild(li);
    })
}

//rimuovere elemento dato un indice stabilito
function removeUser(index) {
   users.splice(index, 1);
   printUsers();
}


