const contactForm = document.querySelector(".contact-form");

let name = document.getElementById('name');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let player3 = document.getElementById('player3');
let player4 = document.getElementById('player4');
let player5 = document.getElementById('player5');

let player1UID = document.getElementById('player1UID');
let player2UID = document.getElementById('player2UID');
let player3UID = document.getElementById('player3UID');
let player4UID = document.getElementById('player4UID');
let player5UID = document.getElementById('player5UID');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        player1: player1.value,
        player2: player2.value,
        player3: player3.value,
        player4: player4.value,
        player5: player5.value,

        player1UID: player1UID.value,
        player2UID: player2UID.value,
        player3UID: player3UID.value,
        player4UID: player4UID.value,
        player5UID: player5UID.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert("Registration Compelete");
            name.value = '';
            player1.value = '';
            player2.value = '';
            player3.value = '';
            player4.value = '';
            player5.value = '';
            player1UID.value = '';
            player2UID.value = '';
            player3UID.value = '';
            player4UID.value = '';
            player5UID.value = '';
        }else{
            alert("Something Went Wrong");
        }
    }

    xhr.send(JSON.stringify(formData));


})