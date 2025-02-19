import React from 'react';

const SportBanner = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg my-10">

      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./sportbanner.png')",
        }}
      />
      
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-6">
        <div className="bg-black px-4 py-2 rounded-lg text-sm mb-6">
          Até 40% de desconto
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Coleção Sport
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Tênis, Mochila, tudo que você precisa na hora de praticar esporte
        </p>
        
        <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
          Ver produtos
        </button>
      </div>
    </div>
  );
};

export default SportBanner;