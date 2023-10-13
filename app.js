window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('header-visible');
    } else {
        header.classList.remove('header-visible');
    }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbyDeAxmljNZPWtEezRX5KTOO8TEXNP-snVbuWNCzqjZsA17J6lr32rCmzMyAMQLvmZ3NQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
