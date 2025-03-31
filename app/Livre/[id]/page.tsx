import Image from "next/image";
import Link from "next/link";

export default function Livre() {
  return (
    <>
      <div className="bg-[#FDEDD5] flex flex-col min-h-screen">
        <main className="p-3 lg:mt-36">
          <section className="flex flex-col justify-center items-center lg:flex-row lg:gap-10 lg:items-start">
            <Image
              src="/livre.jpg"
              alt=""
              width={500}
              height={500}
              className="w-32 sm:w-40 md:w-48 lg:w-64 lg:mr-10"
            />
            <article className="flex flex-col items-center lg:items-start gap-6 lg:w-1/2">
              <h1 className=" text-xl md:text-2xl lg:text-3xl text-center lg:text-left">
                mettre le titre
              </h1>
              <h3 className="font-principale text-xl md:text-2xl lg:text-3xl text-[#F5702B]">
                10$
              </h3>
              <p className="w-56 sm:w-64 md:w-80 lg:w-full font-principale text-justify">
                <span className="font-bold text-black">Résumé: </span>
                description
              </p>
              <div>
                <Link href="/panier" className="w-[150px] h-8 bg-[#F5702B] text-white font-principale flex items-center justify-center hover:bg-[#d45920] transition rounded">
                Ajoutez au paniez
                </Link>
              </div>
            </article>
          </section>
        </main>
      </div>
    </>
  );
}
