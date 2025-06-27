import { BRAND_NAME } from "@lib/brand-config"
import { Text } from "@medusajs/ui"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className="bg-white flex justify-center items-center mt-auto">
      <div className="bg-white text-gray-700 border-t border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h2 className="text-xl font-semibold flex items-center space-x-2 uppercase">
                <span>{BRAND_NAME}</span>
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Mobilier intelligent pour dissimuler vos objets de valeur en
                toute sécurité.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold">(219) 555-0114</span>
              </p>

              <div className="flex space-x-3 mt-3">
                <a href="#" className="text-blue-600">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-red-600">
                  <i className="fab fa-reddit"></i>
                </a>
                <a href="#" className="text-green-500">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#" className="text-pink-600">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Mon Compte</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Link href="/account" className="hover:text-blue-600">
                    Mon Compte
                  </Link>
                </li>
                <li>
                  <Link href="/store" className="hover:text-blue-600">
                    Store
                  </Link>
                </li>
                <li>
                  <Link href="/cart" className="hover:text-blue-600">
                    Panier
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Liste de souhaits
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Aide</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Link href="/contact" className="hover:text-blue-600">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-blue-600">
                    FAQs
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Conditions générales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Politique de confidentialité
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Catégories</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Coffres-forts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Meubles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Accessoires
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <div className="flex space-x-2">
              {/* <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v52tLnvL3FEjfxjPvZWbvUMYvVUtAm9R6A&s"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgk5tpxJC_1CAnsXwo2VvBGyQGI-o5c1PJw&s"
                alt="App Store"
                className="h-10"
              /> */}
            </div>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <img
                src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-White-Dark-Background-Logo.wine.svg"
                alt="Apple Pay"
                className="h-[30px] w-10 rounded-md"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSynWEtLag--sQ4XlfTwHh9_DAnfcglW7C3iw&s"
                alt="Visa"
                className="h-[30px] w-10 rounded-md"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6mJsEDg1aR_JCFb3ohk2nCxjgSvkWnpmlKg&s"
                alt="Mastercard"
                className="h-[30px] w-10 rounded-md"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQveKfGcJ1tSEY8bLg52DxvVrFDJXmxXJgv1Q&s"
                alt="discover"
                className="h-[30px] w-10 rounded-md"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDS0zyuJdI4e7E1VGaNDAVtRn3fGTzr0PBOA&s"
                alt="Secure Payment"
                className="h-[30px] w-10 rounded-md"
              />
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4">
            <Text className="txt-compact-small">
              © {new Date().getFullYear()} {BRAND_NAME}. Tous droits réservés.
            </Text>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
