'use client';
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { useAuth } from "../context/auth-context";

export default function Inscription() {

  // const auth = useAuth();
  const router = useRouter()
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    password: "",
    // roles: "",
    // userPro: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/ld+json",
        },
        body: JSON.stringify(formData),
      });

       console.log(`test:`, formData)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Une erreur est survenue.");
      }

      setSuccess("Inscription réussie !");
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        password: "",
        // roles: "",
        // userPro: ""
      });

   
      router.push('/')

    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-[#FDEDD5] min-h-screen flex items-center justify-center">
      <main className="flex flex-col items-center w-full max-w-md px-6 sm:px-8 lg:px-12">
        <form onSubmit={handleSubmit} className="w-full bg-white p-6 rounded-lg shadow-lg">
          <section className="flex flex-col items-center gap-6">
            <Image src="/logo.png" alt="Logo" width={160} height={160} />

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}

            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Adresse Mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <input
              type="text"
              name="telephone"
              placeholder="Numéro de téléphone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            {/* <select
              name="roles"
              value={formData.roles}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            >
              <option value="">Choisissez votre rôle</option>
              <option value="Client">Client</option>
              <option value="Vendeur">Vendeur</option>
            </select> */}

            <p className="w-full">
              Si vous avez déjà un compte{" "}
              <Link href="/Connexion" className="text-sky-500">
                Connectez-vous
              </Link>
            </p>



            <button
              type="submit"
              className="w-full p-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition duration-300"
            >
              S'inscrire
            </button>
          </section>
        </form>
      </main>
    </div>
  );
}