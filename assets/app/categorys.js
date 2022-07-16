async function getCategory(category) {
    const API = 'https://fakestoreapi.com';
  
    async function fetchData(urlApi) {
      const response = await fetch(urlApi);
      const data = await response.json();
      return data;
    }
  
    const getProductsByCategory = async (urlApi, category) => {
      try {
        const products = await fetchData(`${urlApi}/products/category/${category}`);
        return products;
  
      } catch (error) {
        console.error(error);
      }
    }
  
    const productsCategory = await getProductsByCategory(API, category)
    showProductsByCategory(productsCategory)
  };