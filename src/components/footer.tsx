export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer className="bg-gray-100 py-8 mt-auto">
        <div className="container w-full max-w-[1224px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Sobre nós</h3>
              <p className="text-gray-600 text-sm">
                Oferecemos os melhores produtos com os melhores preços do mercado.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Links rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Produtos</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Promoções</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contato</a></li>
              </ul>
            </div>
  
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contato</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Email: contato@empresa.com</li>
                <li>Tel: (11) 1234-5678</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
  

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>&copy; {currentYear} Sua Empresa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    )
}