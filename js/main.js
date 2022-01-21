const formUrl = document.querySelector('#threeDSMethodURL');
const receivedMessage = document.querySelector('#result');
const data = document.querySelector('#data');
const operation = document.querySelector('#operation');

window.addEventListener("message", (event) => {
    receivedMessage.innerHTML = event.data;
    console.log(event.data)
}, false);

operation.addEventListener("change", (event) => {
    // Decide which action to perform
    if (operation.value === "threeDSMethodData") {
        data.name = "threeDSMethodData";
        data.placeholder = "threeDSMethodData";
    } else if (operation.value === "creq") {
        data.name = "creq";
        data.placeholder = "challengeRequest";
    }
    receivedMessage.innerHTML = "Nothing so far.";
});

function submitForm() {
    let action_src = formUrl.value;
    let form = document.getElementById('form');
    form.action = action_src;
}

