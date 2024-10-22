const Atuacao = () => {
  return (
    <div className="flex flex-col items-center bg-blue-100 py-20">
      <div className="bg-white mx-auto w-11/12 md:w-10/12 lg:w-8/12 p-8 md:p-10 rounded-lg shadow-lg">
        <h2 className="text-orange-500 text-3xl font-semibold mb-5 text-center">Eixo de atuação</h2>
        <img
          src="grafico.png"
          alt="Gráfico"
          className="w-full h-auto object-cover rounded-lg mx-auto mb-5"
        />
      </div>
    </div>
  );
};

export default Atuacao;
