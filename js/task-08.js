const form = document.querySelector('.login-form')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { elements: [email, password] } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        alert("Plase enter data")
    } else {
        console.log(`email: ${email.value}`)
    console.log(`password: ${password.value}`)
    }
    form.reset();
});
