const createElements = (element, dato, clase) => {
  const $element = document.createElement(element);
  $element.classList.add(clase);
  $element.textContent = dato;
  return $element;
}

const createLink = (link) => {
    //see more products link
    const $seeMore = document.createElement("div");
    $seeMore.appendChild(createElements("p","see more","paraghaph"))
    $seeMore.classList.add("seeMore")

    const $icon = document.createElement("img")
    $icon.setAttribute("src", "./assets/svg/arrow.svg")
    $icon.setAttribute("alt","see more arrow")
    $seeMore.appendChild($icon)
    return $seeMore
}

const showProductsByCategory = (products, link = null) => {
  const $section = document.createElement("section");
  $section.classList.add("containerProducts")
  const $container = document.createElement("div")
  $container.classList.add("wrapper")

  const $headerCategory = document.createElement("div")
  $headerCategory.classList.add("headerCategory")
  $headerCategory.appendChild(createElements("h2", products[0].category, "category"))
  $section.appendChild($headerCategory)

  if (link !== null){
    $headerCategory.appendChild(createLink(link))
  }
  
  products.forEach(element => {
    const $div = document.createElement("div");
    $div.classList.add("card")

    const $containerImg = document.createElement("div")
    $containerImg.classList.add("containerImg")
    const $img = createElements("img","", "imageProduct")
    $img.setAttribute("src", element.image)
    $img.setAttribute("alt", element.title)
    $img.setAttribute("loading", "lazy");

    $containerImg.appendChild($img)
    $div.appendChild($containerImg)

    $div.appendChild(createElements("p", element.title, "titleProduct"))
    $div.appendChild(createElements("p", `$${element.price}`, "price"))
    $div.appendChild(createElements("button", "Add to cart", "primaryButton"))

    $container.appendChild($div)
    $section.appendChild($container)
  });
  document.getElementById("products").appendChild($section)
}