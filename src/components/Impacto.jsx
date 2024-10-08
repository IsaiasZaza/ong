import React from 'react';

const Impacto = () => {
  return (
    <div className="bg-blue-50 py-10">
      <h2 className="text-center text-2xl font-bold text-orange-500 mb-4">
        Impacto:
      </h2>
      <div className="container mx-auto">
        <div className="relative">
          {/* Imagem */}
          <img
            src="impacto.png"
            alt="Impacto"
            className="w-full "
          />
          
          {/* Estatísticas sobre a imagem */}
          <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-end bg-black bg-opacity-50 text-white py-10 ">

            <div className='flex flex-row '>
            <div className="text-center md:w-1/4 p-4 border-r-4 border-gray bg-white">
                    <h3 className="text-3xl font-bold text-orange-500">+300</h3>
                    <p className='text-black font-semibold'>Assistidos diretamente ao longo de 8 anos</p>
                    </div>
                    <div className="text-center md:w-1/4 p-4 border-r-4 border-gray bg-white">
                    <h3 className="text-3xl font-bold text-orange-500">+1500</h3>
                    <p className='text-black font-semibold'>Beneficiários impactados indiretamente ao longo de 8 anos</p>
                    </div>
                    <div className="text-center md:w-1/4 p-4 border-r-4 border-gray bg-white">
                    <h3 className="text-3xl font-bold  text-orange-500">+80</h3>
                    <p className='text-black font-semibold'>Famílias impactadas ao longo de 8 anos</p>
                    </div>
                    <div className="text-center md:w-1/4 p-4 bg-white">
                    <h3 className="text-3xl font-bold  text-orange-500">+40</h3>
                    <p className='text-black font-semibold'>Empregos e renda gerados diretamente ao longo de 8 anos</p>
                    </div>
            </div>        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impacto;
