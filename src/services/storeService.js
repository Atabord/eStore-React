
const storeService = {
  getProducts: async () => {
    try {
      const products = await (await fetch('https://atabord-nextu-final.firebaseio.com/productos/.json')).json();
      return products
    } catch (error) {
      return [];
    }
  },

  getProduct: async(name) => {
    try {
      const products = await (await fetch('https://atabord-nextu-final.firebaseio.com/productos/.json')).json();
      return products.find(product => product.nombre === name);
    } catch (error) {
      return {};
    }
  }
}

export default storeService;
