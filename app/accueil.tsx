
import Image from "next/image";

export default function Accueil() {
    return (
      <>
        <main>
          {/* 1ère section */}
          <section className="bg-imageun w-full h-[200px] bg-cover bg-center relative flex flex-col justify-center items-start pl-8 pr-8 sm:h-[300px] lg:h-[400px] xl:h-[690px]">
            <h1 className="text-black text-2xl font-principale font-semibold text-left xl:text-6xl">
              Bienvenue sur BookMarket
            </h1>
            <p className="font-principale text-white text-lg text-left mt-2 xl:text-4xl">
              BookMarket - Plongez dans chaque page
            </p>
          </section>
          {/* Fin de la première section */}
  
          {/* Deuxième section */}
          <section className="bg-[#FDEDD5] flex flex-col gap-8 items-center p-4 lg:items-center">
            <h2 className="font-principale font-semibold text-2xl lg:text-center">
              Recommandé pour vous
            </h2>
  
            {/* Container des articles */}
            <div className="flex flex-col gap-8 items-center lg:flex-row lg:justify-center lg:gap-12 lg:w-full">
              {/* Articles statiques */}
              <article className="flex gap-6 justify-center items-center bg-white rounded-lg p-4 shadow-md lg:flex-col lg:gap-4 lg:items-center lg:w-[300px]">
                <Image
                  src="/livre.jpg"
                  alt="Livre"
                  width={150}
                  height={150}
                  className=" h-auto rounded-lg shadow-lg"
                />
                <div className="flex flex-col items-start lg:items-center lg:text-center">
                  <h3 className="font-principale text-[18px] font-semibold">Titre du Livre 1</h3>
                  <p className="font-principale text-[15px] text-gray-600">AUTEUR: Auteur 1</p>
                  <a
                    href="#"
                    className="bg-[#F5702B] w-[120px] text-white text-sm h-8 flex justify-center items-center rounded-lg hover:bg-[#e25e00] transition duration-300 mt-2"
                  >
                    En savoir plus
                  </a>
                </div>
              </article>
  
              <article className="flex gap-6 justify-center items-center bg-white rounded-lg p-4 shadow-md lg:flex-col lg:gap-4 lg:items-center lg:w-[300px]">
                <img
                  src="/images/livre2.jpg"
                  alt="Livre"
                  className="w-[150px] h-auto rounded-lg shadow-lg"
                />
                <div className="flex flex-col items-start lg:items-center lg:text-center">
                  <h3 className="font-principale text-[18px] font-semibold">Titre du Livre 2</h3>
                  <p className="font-principale text-[15px] text-gray-600">AUTEUR: Auteur 2</p>
                  <a
                    href="#"
                    className="bg-[#F5702B] w-[120px] text-white text-sm h-8 flex justify-center items-center rounded-lg hover:bg-[#e25e00] transition duration-300 mt-2"
                  >
                    En savoir plus
                  </a>
                </div>
              </article>
            </div>
          </section>
        </main>
      </>
    );
  }
  