import { productsApi } from '@/core/api/productsApi';
import { Product } from '../interfaces/product.interface';

export const updateCreateProduct = (product: Partial<Product>) => {
  product.stock = isNaN(Number(product.stock)) ? 0 : Number(product.stock);
  product.price = isNaN(Number(product.price)) ? 0 : Number(product.price);



  if (product.id && product.id !== 'new') {
    return updateProduct(product);
  }

  return createProduct(product);
};

const updateProduct = async (product: Partial<Product>) => {
  const { id, images = [], productCategory,  user, ...rest } = product;

  try {
    const { data } = await productsApi.patch<Product>(`/products/${id}`, {
      // todo: images
      ...rest,
      idProductCategory: productCategory.id
    });

    return data;
  } catch (error) {
    throw new Error('Error al actualizar el producto');
  }
};

async function createProduct(product: Partial<Product>) {
  const { id, images = [], productCategory, user, ...rest } = product;

  try {
  
    const { data } = await productsApi.post<Product>(`/products`, {
      // todo: images
      ...rest,
      idProductCategory: "277824d4-5039-4190-8a54-9f17d242245a"
    });

    return data;
  } catch (error) {
    throw new Error('Error al actualizar el producto');
  }
}
