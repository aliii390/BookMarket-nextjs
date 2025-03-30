

import Image from "next/image";



export default function Connexion(){
    return(
        <>
        
        <div className="bg-[#FDEDD5] min-h-screen flex items-center justify-center">

            <main className="flex flex-col items-center w-full max-w-md px-6 sm:px-8 lg:px-12">
            <form action="../process/connexion-process.php" method="post" className="w-full bg-white p-6 rounded-lg shadow-lg">
      <section className="flex flex-col items-center gap-6">
        <Image src="/logo.png" alt="Logo" width={160} height={160} />
        
        <label className="sr-only">Adresse Mail</label>
        <input
          placeholder="Adresse Mail"
          className="w-full p-3 borderrounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400  "  
        />
        
        <label  className="sr-only">Mot de passe</label>
        <input
          value=""
          placeholder="Mot de passe"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:font-principale"
          required
        />

         
        

        <button
          type="submit"
          className="w-full p-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition duration-300 placeholder:font-principale"
        >
          Se connecter
        </button>
      </section>
    </form>
            </main>
        </div>
        </>
    );
}