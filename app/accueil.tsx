'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


interface Livre {
  id: string;
  titre: string;
  impgPath: string;
  description: string;
  prix: string;
  etatLivre: string;
  auteur: string;
}


export default function Accueil() {
  const [books, setBook] = useState<Livre[]>([]);

  useEffect(() => {
    const fetchLivres = async () => {
      try {
        const reponse = await fetch("http://127.0.0.1:8000/api/livres");
        const datas = await reponse.json();
        // console.log("donner reçues depuis l'api :", datas); 
    
        if (Array.isArray(datas.member)) {
          setBook(datas.member); 
        } else {
          console.error("Les données reçues ne sont pas dans le bon format.");
          setBook([]); 
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des livres :", error);
        setBook([]); 
      }
    };

    fetchLivres();
  }, []);

    return (
      <>
      <main>
        {/* 1ère section */}
        <section className="bg-[url('/home.jpg')] w-full h-[200px] bg-cover bg-center relative flex flex-col justify-center items-start pl-8 pr-8 sm:h-[300px] lg:h-[400px] xl:h-[690px]">
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
          {/* Articles dynamiques */}
          {books.map((book, index) => (
          <article
            className="flex gap-6 justify-center items-center bg-white rounded-lg p-4 shadow-md lg:flex-col lg:gap-4 lg:items-center lg:w-[300px]"
            key={index} 
          >
            <Image
            src={book.impgPath || "/livre.jpg"}
            alt={book.titre}
            width={150}
            height={150}
            className="h-auto rounded-lg shadow-lg"
            />
            <div className="flex flex-col items-start lg:items-center lg:text-center">
            <h3 className="font-principale text-[18px] font-semibold">
              {book.titre}
            </h3>
            <p className="font-principale text-[15px] text-gray-600">
              AUTEUR: {book.auteur}
            </p>
            <p className="font-principale text-[15px] text-gray-600">
              Prix: {book.prix}
            </p>
           

            <Link href={`/livres/${book.id}`}  className="bg-[#F5702B] w-[120px] text-white text-sm h-8 flex justify-center items-center rounded-lg hover:bg-[#e25e00] transition duration-300 mt-2"
            >
            En savoir plus
            </Link>
            </div>
          </article>
          ))}
        </div>
        </section>
      </main>
      </>
    );
  }
