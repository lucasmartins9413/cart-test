import { CartSidebar } from "./cart/sidebar"

export const Header = () => {
    return(
        <div className="flex justify-between items-center">
            <img className="max-w-[90px] w-full" src="https://agenciametodo.com/wp-content/uploads/logo-mtd-branca@2x-min.png" alt="" />

            <CartSidebar/>
        </div>
    )
}