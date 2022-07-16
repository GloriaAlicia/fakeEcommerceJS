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

  showProductsByCategory(productsElectronics, "electronics.html")
  showProductsByCategory(productsJewelery, "jewelery.html")
  showProductsByCategory(productsWomanClothing, "women.html")
  showProductsByCategory(productsMenClothing, "men.html")
})();