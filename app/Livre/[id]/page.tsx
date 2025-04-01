'use client';
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/Header/header";
import { useEffect, useState } from "react";

export default function Livre() {
  const { id } = useParams(); 
  const [livres, setLivre] = useState<{ id: string; impgPath: string; titre: string; prix: string; description: string }[]>([]);
  useEffect(() => {

    if (!id) {
        console.error("ID non défini dans l'URL.");
        return;
      }

    const fetchLivre = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/livres/${id}`);
        const data = await response.json();
        console.log("Données reçues :", data); // Ajoutez cette ligne pour déboguer
  
        if (data) {
          setLivre([data]); // Si `data` est un objet, encapsulez-le dans un tableau
        } else {
          console.error("Les données reçues ne sont pas dans le bon format.");
          setLivre([]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du livre :", error);
      }
    };
  
    fetchLivre();
  }, [id]);

  if (!livres) {
    return <p className="text-center py-16 text-lg font-medium">Chargement...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FDEDD5]">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16 lg:mt-20">
        <section className="max-w-7xl mx-auto">
          {livres.map((livre, index) => (
            <div key={livre.id || index} className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16">
              <div className="mb-8 lg:mb-0 flex justify-center lg:justify-start lg:w-1/3">
                <Image
                  src={livre.impgPath || "/default-image.jpg"}
                  alt={livre.titre || "Image du livre"}
                  width={500}
                  height={500}
                  className="w-48 sm:w-56 md:w-64 lg:w-full max-w-xs xl:max-w-sm h-auto object-cover shadow-lg rounded-sm"
                  priority
                />
              </div>
              
              <div className="flex flex-col lg:w-2/3">
                <article className="flex flex-col items-center lg:items-start gap-4 md:gap-6">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left">
                    {livre.titre}
                  </h1>
                  
                  <h3 className="font-principale text-xl sm:text-2xl md:text-3xl text-[#F5702B] font-semibold">
                    {livre.prix}
                  </h3>
                  
                  <div className="w-full">
                    <p className="font-principale text-justify text-sm sm:text-base md:text-lg">
                      <span className="font-bold text-black">Résumé: </span>
                      {livre.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 sm:mt-8 md:mt-10">
                    <Link
                      href="/panier"
                      className="inline-block px-6 py-2.5 sm:py-3 bg-[#F5702B] text-white font-principale rounded shadow-md hover:bg-[#d45920] transition-colors duration-300 text-sm sm:text-base font-medium"
                    >
                      Ajoutez au panier
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}