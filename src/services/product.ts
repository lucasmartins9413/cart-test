import { Product } from "@/types/product"

export type ApiProduct = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

const transformApiProduct = (apiProduct: ApiProduct): Product => ({
    id: apiProduct.id,
    category: apiProduct.category,
    name: apiProduct.title,
    image: apiProduct.image,
    price: apiProduct.price
});

export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: ApiProduct[] = await response.json();
        return data.map(transformApiProduct);
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};