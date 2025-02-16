import {Cart} from "@/types/cart";
import { CartItemQuantity } from "./item.quantity";

type Props = {
    item: Cart;
}

export const CartItem = ({item}: Props) => {
    return(
       <div className="flex items-center gap-5">
            <div className="w-16 overflow-hidden">
                <img src={item.product.image} alt="" className="w-full h-auto object-cover" />
            </div>
            <div className="flex-1">
                <p className="text-sm mb-1">{item.product.name}</p>
                <p className="text-xs opacity-50">{item.product.price.toFixed(2)}</p>
            </div>
            <div>
                <CartItemQuantity cartItem={item} />
            </div>
       </div>
    );
}