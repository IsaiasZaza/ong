const DiretoriaExecutiva = () => {
  return (
    <section className="py-10 px-4 lg:px-32">
      <h2 className="text-3xl font-bold text-black mb-10">Diretoria Executiva</h2>

      <div className="space-y-10">
        {/* Primeiro Membro */}
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="/Gabriela-Caiuby.png" // Ajuste o caminho da imagem conforme necessário
            alt="Gabriela Caiuby"
            className="w-36 h-36 object-cover rounded-md"
          />
          <div>
            <h3 className="text-xl font-semibold text-black">
              Gabriela Caiuby – <span className="font-bold italic">Presidente e Fundadora da Gamboa Ação</span>
            </h3>
            <p className="text-gray-700 py-4">
              Economista pela Aix Marseille University, mestre em planejamento ambiental pela COPPE-UFRJ, Gabriela Caiuby
              conheceu e se apaixonou pelas crianças e os adolescentes da Gamboa no início de 2014. Desde então, vem lutando
              para que eles tenham um futuro brilhante, cheio de amor, paz, justiça e alegria. Busca inspiração e criatividade
              para ver a vida das famílias da região transformadas.
            </p>
          </div>
        </div>

        {/* Segundo Membro */}
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="/Alvaro-Menezes.png" // Ajuste o caminho da imagem conforme necessário
            alt="Alvaro Menezes"
            className="w-36 h-36 object-cover rounded-md"
          />
          <div>
            <h3 className="text-xl font-semibold text-black">
              Alvaro Menezes – <span className="font-bold italic">Gerente Geral</span>
            </h3>
            <p className="text-gray-700 py-4">
            Administrador de Empresas, Gestor Esportivo e cursando MBA em Gestão e Desenvolvimento de Negócios pela PUC. 
            Possui mais de 15 anos de experiência em projetos de Gestão, Comunicação e Marketing, gerenciou projetos para empresas como Petrobras, 
            Tim Brasil, Firjan e Mccarthy Tétrault (Canadá). Desde 2018, lidera a gestão e desenvolvimento institucional da Gamboa Ação.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiretoriaExecutiva;
