'use client';

import { useState } from "react";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/stores/cart-store";

type Props = {
    item: Product;
    onAdd?: (product: Product, quantity: number) => void;
};

export const ProductItem = ({ item, onAdd }: Props) => {
    const { toast } = useToast();
    const { upsertCartItem } = useCartStore(state => state);
    const [quantity, setQuantity] = useState(0);

    const handleMinusButton = () => {
        if (quantity > 0) {
            setQuantity(prev => prev - 1);
        }
    };

    const handlePlusButton = () => {
        setQuantity(prev => prev + 1);
    };

    const handleAddToCart = () => {
        if (quantity > 0) {
            upsertCartItem(item, quantity);

            toast({
                title: 'Adicionado ao carrinho',
                description: `${quantity}x ${item.name}`,
                action: <ToastAction altText="Fechar">Fechar</ToastAction>
            });

            setQuantity(0);
        }
    };

    return (
        <div className="rounded-lg p-4 bg-white transition-all">
            <div className="relative h-48 mb-4">
                <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <h3 className="font-medium text-md line-clamp-2 h-10">{item.name}</h3>
                <p className="text-sm text-gray-500">
                    {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </p>

                <div className="flex items-center space-x-4">
                    <Button variant="outline" onClick={handleMinusButton} disabled={quantity === 0}>
                        -
                    </Button>
                    <span className="text-lg font-semibold">{quantity}</span>
                    <Button variant="outline" onClick={handlePlusButton}>
                        +
                    </Button>
                </div>

                <Button 
                    variant="default"
                    onClick={handleAddToCart}
                    className="w-full mt-2 bg-orange-500 text-white hover:bg-orange-600"
                    disabled={quantity === 0}
                >
                    Adicionar ao Carrinho
                </Button>
            </div>
        </div>
    );
};

export default ProductItem;
