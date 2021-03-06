
const DB_URL = 'https://atabord-nextu-final.firebaseio.com';

const storeService = {
  getProducts: async () => {
    try {
      const products = await (await fetch(`${DB_URL}/productos.json`)).json();
      return products
    } catch (error) {
      return [];
    }
  },

  getProduct: async(name) => {
    try {
      const products = await (await fetch(`${DB_URL}/productos.json`)).json();
      return products.find(product => product.nombre === name);
    } catch (error) {
      return {};
    }
  },

  buyProducts: async(products) => {
    try {
      const store = await (await fetch(`${DB_URL}/productos.json`)).json();
      await Promise.allSettled(products.map(async (product) => {
        const storeIndex = store.findIndex(storeProduct => storeProduct.nombre === product.nombre);
        await fetch(`${DB_URL}/productos/${storeIndex}.json`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'inventario': store[storeIndex].inventario - product.cantidad,
          })
        });
      }))
    } catch (error) {
      return;
    }
  }
}

export default storeService;
