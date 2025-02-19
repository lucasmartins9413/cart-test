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
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    
    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button className="flex items-center gap-2 relative bg-transparent shadow-inherit hover:!bg-transparent hover:!shadow-none p-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="33"
                        viewBox="0 0 24 25"
                        fill="none"
                        className="min-w-6"
                    >
                        <path
                        d="M6 2.5L3 6.5V20.5C3 21.0304 3.21071 21.5391 3.58579 21.9142C3.96086 22.2893 4.46957 22.5 5 22.5H19C19.5304 22.5 20.0391 22.2893 20.4142 21.9142C20.7893 21.5391 21 21.0304 21 20.5V6.5L18 2.5H6Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <path
                        d="M3 6.5H21"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <path
                        d="M16 10.5C16 11.5609 15.5786 12.5783 14.8284 13.3284C14.0783 14.0786 13.0609 14.5 12 14.5C10.9391 14.5 9.92172 14.0786 9.17157 13.3284C8.42143 12.5783 8 11.5609 8 10.5"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    <span className="hidden md:block text-black">Carrinho</span>
                    {totalQuantity > 0 && (
                        <div className="absolute size-5 rounded-full bg-red-600 -top-1 -right-1 flex items-center justify-center">
                        <span className="text-white text-xs">{totalQuantity}</span>
                        </div>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col h-full">
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>

                {cart.length === 0 ? (
                    <div className="text-center text-gray-500 flex-grow flex justify-center items-center">
                        Seu carrinho está vazio
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col gap-5 my-3 flex-grow">
                            {cart.map(item => (
                                <CartItem item={item} key={item.product.id} />
                            ))}
                        </div>

                        <Separator className="my-4" />

                        <div className="flex justify-between items-center text-xs">
                            <div>Subtotal</div>
                            <div>RS {subtotal.toFixed(2)}</div>
                        </div>

                        <Separator className="my-4" />

                        {/* Barra de Frete Grátis */}
                        <div className="relative w-full bg-gray-200 rounded-full h-2.5 mb-4">
                            <div
                                className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                                style={{ width: `${Math.min((subtotal / 400) * 100, 100)}%` }}
                            ></div>
                        </div>
                        <p className="text-center text-sm font-medium">
                            {subtotal >= 400
                                ? "🎉 Parabéns! Você ganhou frete grátis!"
                                : `Faltam R$ ${(400 - subtotal).toFixed(2)} para frete grátis`}
                        </p>

                        <div className="mt-auto sticky bottom-0 p-4">
                            <Button className="w-full">
                                Finalizar Compra
                            </Button>
                        </div>
                    </>
                )}
            </SheetContent>


        </Sheet>
    );
}