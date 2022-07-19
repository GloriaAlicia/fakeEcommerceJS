
const $form = document.getElementById("form")

$form.addEventListener("submit", (e) => {
    sendMenssage(e);
});

async function sendMenssage(e) {
    const $name = document.getElementById("category").value
    e.preventDefault()

    const response = await fetch(e.target.action, {

        method: $form.method,
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": `${$name}`,
            "image": "https://images.unsplash.com/photo-1586104195538-050b9f74f58e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        })
    })
    if (response.ok) {
        $form.reset()
    } else {
        console.log(response)
    }
}