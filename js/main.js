const formUrl = document.querySelector('#threeDSMethodURL');
const receivedMessage = document.querySelector('#result');

window.addEventListener("message", (event) => {
    receivedMessage.innerHTML = "Worked";
    console.log("Worked" + event)
}, false);

function submitForm() {
    let action_src = formUrl.value;
    let form = document.getElementById('form');
    form.action = action_src;
}

