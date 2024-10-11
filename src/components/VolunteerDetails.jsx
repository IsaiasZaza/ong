const VolunteerDetails = () => {
    return (
      <div className="py-12 space-y-8">
        {/* Voluntariado mão na massa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="path/to/your/image1.png" alt="Mão na massa" className="w-full h-auto" />
          <div className="bg-white p-6 flex flex-col justify-center">
            <h3 className="text-sky-500 font-semibold text-lg">
              Voluntariado mão na massa, tradicional:
            </h3>
            <p className="text-gray-700 mt-2">
              trabalhos pontuais e atividades durante nossos eventos comemorativos. Voluntários "mão na massa" ajudam diretamente nas atividades com as crianças, na logística de eventos e muito mais!
            </p>
            <p className="text-black font-semibold mt-4">
              Seja parte das ações no campo!
            </p>
          </div>
        </div>
  
        {/* Voluntariado por competência */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-sky-500 p-6 flex flex-col justify-center text-white">
            <h3 className="font-semibold text-lg">Voluntariado por competência:</h3>
            <p className="mt-2">
              se você tem conhecimento específico em áreas como medicina, serviço social, nutrição, psicologia, e outras, pode contribuir diretamente com o desenvolvimento de nossas crianças e adolescentes. Seu conhecimento pode transformar vidas!
            </p>
            <p className="font-semibold mt-4 italic">
              Use suas habilidades e expertise para fazer a diferença!
            </p>
          </div>
          <img src="path/to/your/image2.png" alt="Por competência" className="w-full h-auto" />
        </div>
  
        {/* Voluntariado Pro Bono */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="path/to/your/image3.png" alt="Pro Bono" className="w-full h-auto" />
          <div className="bg-sky-500 p-6 flex flex-col justify-center text-white">
            <h3 className="font-semibold text-lg">Voluntariado Pro Bono:</h3>
            <p className="mt-2">
              se você ou sua empresa têm especializações que podem apoiar nossa gestão (gerenciamento de projetos, contabilidade, advocacia, etc.), oferecer sua consultoria pro bono pode nos ajudar a aumentar nossa eficiência e governança.
            </p>
            <p className="font-semibold mt-4 italic">
              Ajude a fortalecer nossa operação!
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default VolunteerDetails;
  