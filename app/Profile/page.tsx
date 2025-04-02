'use client';
import { useState, useEffect } from "react";
import Header from "../Header/header";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  // Charger les données utilisateur depuis l'API
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/me'); 
        const data = await response.json();
        setUser(data);
        setFormData(data);
      } catch (error) {
        console.error("Erreur lors du chargement des données utilisateur :", error);
      }
    }
    fetchUser();
  }, []);

  // Gérer la soumission du formulaire
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch('/api/user', {
        method: 'GET', // de base la méthode c PUT
        headers: { 'Content-Type': 'application/ld+json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        setIsModalOpen(false);
      } else {
        console.error("Erreur lors de la mise à jour des données utilisateur");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
    }
  }

  if (!user) return <p>Chargement...</p>;

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto mt-10 p-6 sm:p-8">
        <div className="text-center mb-6 lg:mb-7">
          <h1 className="text-xl sm:text-2xl font-principale text-black">
            Bienvenue {user.prenom || "Utilisateur"}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Gérez vos informations personnelles et vos préférences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 bg-gray-100 p-6 rounded-lg shadow-md">
            
              <p className="text-lg mt-4" key={index}>
                <span className="font-semibold text-gray-700">{item.label} :</span> {item.value || "Sa marche ap"}
              </p>
      

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#F5702B] text-white px-6 py-2 rounded-lg hover:bg-[#d45920] transition"
              >
                Modifier le profil
              </button>
              <a
                href="/logout"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-[#d45920] transition"
              >
                Déconnexion
              </a>
            </div>
          </div>
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              ×
            </button>
            <h2 className="text-xl font-principale text-gray-700 mb-4">Modifier le profil</h2>
            <form className="space-y-4">
              {/* {["nom", "prenom", "email"].map((field, index) => ( */}
                <div key={index}>
                  <label className="block text-gray-600 font-principale">{field}</label>
                  <input
                    type="text"
                    value=""
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              {/* ))} */}

              {user.role === "Vendeur" && (
                ["nomEntreprise", "adresseEntreprise"].map((field, index) => (
                  <div key={index}>
                    <label className="block text-gray-600 font-principale">{field.replace("Entreprise", " Entreprise")}</label>
                    <input
                      type="text"
                      value=""
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                ))
              )}
              <button className="w-full bg-[#F5702B] font-principale text-white py-3 rounded-lg hover:bg-[#d45920] transition">
                Enregistrer les modifications
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
