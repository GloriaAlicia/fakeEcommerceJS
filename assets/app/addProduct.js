//API link colocado en action="link"
async function sendRequest(e, data) {
    const response = await fetch(e.target.action, {
        method: $form.method,
        mode: "cors",
        credentials: "same-origin", //optional
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        // $form.reset()
        console.log(response)
        console.log("bien")

    } else {
        console.log(response)
    }
}

const $form = document.getElementById("formAddProduct");


//submit product

$form.addEventListener("submit", (e) => {
    // e.preventDefault()
    const get = (name) => document.getElementById(name).value
    const $select = document.getElementById('category');
    const categoryId = $select.options[$select.selectedIndex].value 

    const data = {
        "title": `${get("title")}`,
        "price": `${get("price")}`,
        "description": `${get("description")}`,
        "categoryId": `${categoryId}`,
        "images": [`${get("image")}`]
        // "images": ["https://placeimg.com/640/480/any"]
    }

    console.log(data)
    sendRequest(e, data)
});