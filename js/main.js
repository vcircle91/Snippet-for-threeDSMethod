const formUrl = document.querySelector('#threeDSMethodURL');
const receivedMessage = document.querySelector('#result');

window.addEventListener("message", (event) => {
    receivedMessage.innerHTML = message;
}, false);

function submitForm() {
    let action_src = formUrl.value;
    let form = document.getElementById('form');
    form.action = action_src;
}

