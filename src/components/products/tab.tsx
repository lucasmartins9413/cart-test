// components/ProductsTab.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/product";
import { Product } from "@/types/product";
import ProductItem from "./item";

type Tab = {
    title: string;
    value: string;
    products: Product[];
}

const categoryMap: Record<string, string> = {
    "men's clothing": "men",
    "women's clothing": "women",
    "electronics": "electronics",
    "jewelery": "jewelry"
};

export const ProductsTab = async () => {
    const products = await getAllProducts();

    const tabs: Tab[] = [
        {
            title: "Roupas Masculinas",
            value: "men",
            products: products.filter(item => item.category === "men's clothing")
        },
        {
            title: "Roupas Feminas",
            value: "women",
            products: products.filter(item => item.category === "women's clothing")
        },
        {
            title: "Eletrônicos",
            value: "electronics",
            products: products.filter(item => item.category === "electronics")
        },
        {
            title: "Jóias",
            value: "jewelry",
            products: products.filter(item => item.category === "jewelery")
        }
    ];

    return (
        <Tabs defaultValue="men" className="w-full mx-auto mt-10">
            <TabsList className="flex flex-col sm:flex-row h-auto bg-inherit shadow-inherit sm:bg-gray-100 p-1 rounded-lg shadow-md whitespace-nowrap">
                {tabs.map(item => (
                    <TabsTrigger
                        className="flex-1 min-w-[100px] py-2 text-gray-600 font-semibold transition-all 
                                rounded-lg hover:bg-orange-200 hover:text-orange-700 
                                data-[state=active]:bg-orange-500 data-[state=active]:text-white
                                text-center"
                        key={item.value}
                        value={item.value}
                    >
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>

            {tabs.map(item => (
                <TabsContent key={item.value} value={item.value} className="sm:p-4">
                    {item.products.length > 0 ? (
                        <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
                            {item.products.map(product => (
                                <ProductItem 
                                    key={product.id}
                                    item={product}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>Nenhum produto encontrado</p>
                    )}
                </TabsContent>
            ))}
        </Tabs>
    );
}