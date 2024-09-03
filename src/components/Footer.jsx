0

const Footer = () => {
    return (
        <footer class="bg-orange-400 text-white py-8">
        <div class="container mx-auto px-6">
          <div class=" flex flex-wrap justify-between">
            
            <div class="w-full md:w-1/3 mb-6 md:mb-0 text-white">
              <h4 class="text-xl font-bold mb-3">Fale Conosco</h4>
              <p class="text-white mb-4">
              contato@gamboaacao.org.br
              </p>
              <p class="text-gray-400 mb-4">
              21-98899-3699
              </p>
            </div>
               
            <div class="w-full md:w-1/3 mb-6 md:mb-0 flex-col" >
            <img src="logo3.png" alt="" className="w-48 h-auto" />

            <div className="flex flex-wrap justify-center gap-4 mt-12">
                <img src="/melhor1.png" alt="" className="w-24 h-auto object-cover rounded-full" />
                <img src="/melhor1.png" alt="" className="w-24 h-auto object-cover rounded-full" />
                <img src="/melhor1.png" alt="" className="w-24 h-auto object-cover rounded-full" />
                <img src="/melhor1.png" alt="" className="w-24 h-auto object-cover rounded-full" />
                <img src="/melhor1.png" alt="" className="w-24 h-auto object-cover rounded-full" />
                <img src="/melhor1.png" alt="" className="w-24 h-auto object-cover rounded-full" />
            </div>

            </div>
  
            
            <div class="w-full md:w-1/3">
                <h4 class="text-xl font-semibold mb-3">Onde Estamos</h4>
                <div class="flex space-x-4">
                    <a href="https://facebook.com/exemplo" class="text-blue-400 hover:text-blue-300" aria-label="Facebook">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/facebook.svg" alt="Facebook" class="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com/exemplo" class="text-blue-400 hover:text-blue-300" aria-label="Twitter">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/twitter.svg" alt="Twitter" class="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com/exemplo" class="text-blue-400 hover:text-blue-300" aria-label="Instagram">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/instagram.svg" alt="Instagram" class="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/company/exemplo" class="text-blue-400 hover:text-blue-300" aria-label="LinkedIn">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg" alt="LinkedIn" class="w-6 h-6" />
                    </a>
                </div>
            </div>
          </div>
        </div>
                  {/* Direitos Autorais */}
        <div className="text-center text-sm mt-8">
            <p>&copy; {new Date().getFullYear()} Gamboa Ação. Todos os direitos reservados.</p>
          </div>
      </footer>
      
    )
}

export default Footer 