'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Inscription(){
const [formData , setFormData] = useState({
})


    return(
        <>
        
        <div className="bg-[#FDEDD5] min-h-screen flex items-center justify-center">
      <main className="flex flex-col items-center w-full max-w-md px-6 sm:px-8 lg:px-12">
        <form  className="w-full bg-white p-6 rounded-lg shadow-lg">
          <section className="flex flex-col items-center gap-6">
            <Image src="/logo.png" alt="Logo" width={160} height={160} />

            <input type="text" name="nom" placeholder="Nom" value=""  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />

            <input type="text" name="prenom" placeholder="Prénom" value="" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />

            <input type="email" name="email" placeholder="Adresse Mail" value=""  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />

            <input type="text" name="telephone" placeholder="Numéro de téléphone" value="" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />

            <input type="password" name="mdp" placeholder="Mot de passe" value="" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />

            <select name="role" value=""  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
              <option value="">Choisissez votre rôle</option>
              <option value="Client">Client</option>
              <option value="Vendeur">Vendeur</option>
            </select>

            <p className="w-full">Si vous avez déjà un compte <Link href="/Connexion" className="text-sky-500">Connectez-vous</Link></p>

            <button type="submit" className="w-full p-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition duration-300">
              S'inscrire
            </button>
          </section>
        </form>
      </main>
    </div>
        
        </>


    );
}