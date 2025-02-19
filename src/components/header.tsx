import { CartSidebar } from "./cart/sidebar"

export const Header = () => {
    return(
        <div className="flex justify-between items-center px-5">
            <img className="max-w-[90px] w-full" src="/logo.png" alt="" />
            <nav className="hidden md:flex gap-6">
                <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Início</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Produtos</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Sobre</a>
                <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Contato</a>
            </nav>
            <div className="flex items-center gap-4">
                <CartSidebar />
                
                <div className="md:hidden">
                    <button className="text-gray-700 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}