const Section = () => {
    return (
        <section>
        <div className="bg-[url('/teste.jpg')]  bg-fixed bg-cover min-h-screen flex items-center justify-end p-10 flex-col">
           
            
          <a href="#" className="bg-yellow-500 text-white px-16 py-8 rounded-lg text-xl font-bold hover:bg-yellow-600 ">
            Doe Agora
          </a>
        </div>

        <div className="bg-[url('/teste-vagalume.jpg')]  bg-fixed bg-cover flex items-center justify-start p-10 flex-col">

        <div></div>
          <h1 href="#" className=" text-yellow-500 px-16 py-8 rounded-lg text-4xl text font-bold">
            PROPOSITO
          </h1>
          <p className=" text-white px-16 py-2 rounded-lg text-2xl text font-bold">“Um novo mandamento vos dou: </p>
          <p className=" text-white px-16 py-2 rounded-lg text-2xl text font-bold">Que vos ameis uns aos outros; como eu vos amei a vós.”</p>
          <p className=" text-white px-16  py-2 rounded-lg text-2xl text font-bold">como eu vos amei a vós.”</p>
          <p className=" text-yellow-500 px-16 py-8 rounded-lg text-2xl text font-bold">João 13:34</p>
            
            
          <a href="#" className="bg-yellow-500 text-white px-16 py-8 rounded-lg text-xl font-bold hover:bg-yellow-600 mt-28">
            Entenda Sobre Nós
          </a>
        </div>
      </section>

        
    )
}

export default Section;