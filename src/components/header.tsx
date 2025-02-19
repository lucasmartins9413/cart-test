import { CartSidebar } from "./cart/sidebar"

export const Header = () => {
    return(
        <div className="flex justify-between items-center px-5">
            <img className="max-w-[90px] w-full" src="/logo.png" alt="" />

            <CartSidebar/>
        </div>
    )
}