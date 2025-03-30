'use client'; 
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [MenuOuvert, setMenuOuvert] = useState(false);

  return (
    <>
      <header className="bg-[#FDEDD5] flex items-center p-3 justify-between gap-4 sm:justify-between sm:px-6 xl:justify-around">
        <Image src="/logo.png" alt="Logo" width={128} height={50} priority />

        <input
          type="text"
          name="recherche"
          placeholder="Recherchez"
          className="bg-[#F5702B] px-5 placeholder-white w-[180px] text-white text-sm 
                     rounded-3xl h-7 placeholder:text-sm sm:w-[250px] sm:h-8 md:w-[150px] lg:w-[250px] xl:w-[350px]"
        />

        <div className="md:flex md:items-center">
          <ul className="hidden md:flex md:gap-8 md:items-center">
            <li>
              <Link href="#" legacyBehavior>
                <a className="font-principale text-gray-700 hover:text-[#F5702B] transition">Livre</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="font-principale text-gray-700 hover:text-[#F5702B] transition">Support</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="font-principale text-gray-700 hover:text-[#F5702B] transition">Contact</a>
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex md:ml-6">
            <Link href="./inscription.php" legacyBehavior>
              <a className="w-[130px] h-8 bg-[#F5702B] text-white font-principale flex items-center justify-center 
                          hover:bg-[#d45920] transition">
                Connectez-vous
              </a>
            </Link>
          </div>

          <div className="hidden md:flex md:ml-4">
            <Link href="#" legacyBehavior>
              <a>
                <i className="fa-solid fa-cart-shopping text-black text-lg hover:text-[#F5702B] transition"></i>
              </a>
            </Link>
          </div>
        </div>

        {/* Menu burger */}
        <button onClick={() => setMenuOuvert(true)} className="text-xl text-black md:hidden">
        <FontAwesomeIcon icon={faBars} />
        </button>
      </header>

      {/* Menu burger */}
      <div
        className={`fixed h-full w-[250px] bg-[#F5702B] z-10 top-0 transition-all duration-500 shadow-lg 
                    ${MenuOuvert ? "left-0" : "-left-[250px]"}`}
      >
        {/* Bouton de fermeture */}
        <button onClick={() => setMenuOuvert(false)} className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-gray-800">
          ×
        </button>

      
        <div className="text-center py-6 border-b border-gray-300">
          <Image src="/logo.png" alt="Logo" width={144} height={60} />
        </div>

        {/* Liens du menu */}
        <ul className="list-none p-0 m-0 mt-4 space-y-2">
          <li>
            <Link href="#" legacyBehavior>
              <a className="flex items-center p-4 text-lg text-white hover:text-gray-800 hover:bg-gray-100 transition rounded-lg font-principale sm:font-principale">
                Livres
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" legacyBehavior>
              <a className="flex items-center p-4 text-lg text-white hover:text-gray-800 hover:bg-gray-100 transition rounded-lg font-principale sm:font-principale">
                Support
              </a>
            </Link>
          </li>
          <li>
            <Link href="#" legacyBehavior>
              <a className="flex items-center p-4 text-lg text-white hover:text-gray-800 hover:bg-gray-100 transition rounded-lg font-principale sm:font-principale">
                Contact
              </a>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link href="./inscription.php" legacyBehavior>
              <a className="flex justify-center items-center h-10 w-40 px-3 py-2 text-sm text-white bg-[#2A3D37] 
                         hover:bg-[#109133] hover:text-white transition rounded-lg">
                <i className="fa-solid fa-user-plus mr-2"></i>
                <span className="font-principale sm:font-principale">Connectez-vous</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
