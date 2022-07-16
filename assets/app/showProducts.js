const createElements = (element, text, styles) => {
  const $element = document.createElement(element);
  $element.classList.add(styles);
  $element.textContent = text;
  return $element;
}

const createLink = (link) => {
  //see more products link
  const $seeMore = document.createElement("a");
  $seeMore.classList.add("seeMore")
  $seeMore.setAttribute("href", `./assets/pages/${link}`)

  $seeMore.innerHTML = `
    <p class="paragraph">see more</p>
    <img src="./assets/svg/arrow.svg" alt="see more">
  `
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

  if (link !== null) {
    $headerCategory.appendChild(createLink(link))
  }

  products.forEach(element => {
    //individual cards
    const $card = document.createElement("div");
    $card.classList.add("card")

    $card.innerHTML = `
      <div class="containerImg">
          <img src=${element.image} alt=${element.title} class="imageProduct" loading="lazy">
      </div>
      <p class="titleProduct">${element.title}</p>
      <p class="price">$${element.price}</p>
      <button class="primaryButton">see product</button>
    `
    $container.appendChild($card)
  });
  $section.appendChild($container)
  document.getElementById("products").appendChild($section)
}