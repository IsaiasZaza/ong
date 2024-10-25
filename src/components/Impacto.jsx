import React from 'react';

const Impacto = () => {
  return (
    <div className="py-10">
      <div
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: "url('impact.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white py-10 px-4 md:px-10">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-4">
            Impacto:
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 w-full pt-16">
            <div className="text-center flex-1 min-w-[120px] p-4">
              <h3 className="text-3xl md:text-4xl font-bold">+300</h3>
              <p className="text-sm md:text-base font-semibold">
                Assistidos diretamente ao longo de 8 anos
              </p>
            </div>
            <div className="text-center flex-1 min-w-[120px] p-4">
              <h3 className="text-3xl md:text-4xl font-bold">+1500</h3>
              <p className="text-sm md:text-base font-semibold">
                Beneficiários impactados indiretamente ao longo de 8 anos
              </p>
            </div>
            <div className="text-center flex-1 min-w-[120px] p-4">
              <h3 className="text-3xl md:text-4xl font-bold">+80</h3>
              <p className="text-sm md:text-base font-semibold">
                Famílias impactadas ao longo de 8 anos
              </p>
            </div>
            <div className="text-center flex-1 min-w-[120px] p-4">
              <h3 className="text-3xl md:text-4xl font-bold">+40</h3>
              <p className="text-sm md:text-base font-semibold">
                Empregos e renda gerados diretamente ao longo de 8 anos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impacto;
