const container = document.getElementById ("container")

container.innerHTML = "<button onclick = 'buy()' > Buy! </button>"

// const thankEl = document.getElementById ("thank-el")
// thankEl.innerHTML = "Thank you for buying!"

function buy() {
    container.innerHTML += "<p> Thank you for buying! </p>"
}