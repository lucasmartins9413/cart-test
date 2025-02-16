"use client";

import { useCartStore } from "@/stores/cart-store";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CartItem } from "@/components/cart/item";



export const CartSidebar = () => {

    const {cart} = useCartStore(state => state);

    let subtotal = 0;
    for(let item of cart){
        subtotal += item.quantity * item.product.price;
    }

    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button className="relative">
                    <p>Carrinho</p>
                    {cart.length > 0 && 
                        <div className="absolute size-3 rounded-full bg-red-600 roundend-full -top-1 -right-1"></div>
                    }
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-5 my-3">
                    {cart.map(item =>(
                        <CartItem item={item} key={item.product.id}/>
                    ))}
                </div>

                <Separator className="my-4"/>

                <div className="flex justify-between items-center text-xs">
                    <div>Subtotal</div>
                    <div>RS {subtotal.toFixed(2)}</div>
                </div>

                <Separator className="my-4"/>

                
                <div className="text-center">
                    <Button
                        disabled={cart.length === 0}
                    >
                        Finalizar Compra
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}