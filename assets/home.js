(async function () {
  
  const API = 'https://fakestoreapi.com';

  async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
  }

  const getProductsByCategory = async (urlApi, category) => {
    try {
      const products = await fetchData(`${urlApi}/products?limit=20`);
      const filtrando = products.filter(product => product.category == category);
      filtrando.splice(4)

      return filtrando;

    } catch (error) {
      console.error(error);
    }
  }

  const productsElectronics = await getProductsByCategory(API, "electronics")
  const productsJewelery = await getProductsByCategory(API, "jewelery")
  const productsWomanClothing = await getProductsByCategory(API, "women's clothing")
  const productsMenClothing = await getProductsByCategory(API, "men's clothing")

  
  const createElements = (element, dato, clase) => {
    const $element = document.createElement(element);
    $element.classList.add(clase);
    $element.textContent = dato;
    return $element;
}

const showProductsByCategory = (products) => {
    const $section = document.createElement("section");
    $section.classList.add("containerProducts")
    $section.appendChild(createElements("h2", products[0].category, "category"))
    const $container = document.createElement("div")
    $container.classList.add("wrapper")

    
    products.forEach(element => {
      const $div = document.createElement("div");
      $div.classList.add("card")

      const $containerImg = document.createElement("div")
      $containerImg.classList.add("containerImg")
      const $img = createElements("img","", "imageProduct")
      $img.setAttribute("src", element.image)
      $img.setAttribute("alt", element.title)

      $containerImg.appendChild($img)
      $div.appendChild($containerImg)

      $div.appendChild(createElements("p", element.title, "titleProduct"))
      $div.appendChild(createElements("p", `$${element.price}`, "price"))
      $div.appendChild(createElements("button", "proximamente", "buttonAddCart"))

      $container.appendChild($div)
      $section.appendChild($container)
    });
    document.getElementById("products").appendChild($section)
}
showProductsByCategory(productsElectronics)
showProductsByCategory(productsJewelery)
showProductsByCategory(productsWomanClothing)
showProductsByCategory(productsMenClothing)
}) ();