import React from 'react';

const PromoBanner = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-white rounded-lg overflow-hidden mt-8">

      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <div className="absolute inset-0 bg-black/50 z-10">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Até 50% de desconto</h2>
            <p className="text-sm">Na primeira compra!</p>
          </div>
        </div>
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/bannerpromo.png')",
          }}
        />
      </div>

      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">
          Encontre camisas que combinam com você!
        </h1>
        <p className="text-gray-600 mb-6">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est excepteur sint occaecat qui officia deserunt mollit proident, sunt in culpa qui officia deserunt mollit anim id es
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full w-fit hover:bg-gray-800 transition-colors">
          Acessar descontos
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;