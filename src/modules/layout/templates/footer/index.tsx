import { BRAND_NAME } from "@lib/brand-config"
import { Text } from "@medusajs/ui"
import Link from "next/link"
import React from "react"
import { AiFillTikTok } from "react-icons/ai"
import {
  FaFacebook,
  FaInstagramSquare,
  FaPinterestSquare,
} from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="bg-white flex justify-center items-center mt-auto">
      <div className="bg-white text-gray-700 border-t border-gray-200">
        <div className=" mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="100"
            >
              <h2 className="text-xl font-semibold flex items-center space-x-2 uppercase">
                <span>{BRAND_NAME}</span>
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Mobilier intelligent pour dissimuler vos objets de valeur en
                toute sécurité.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold">(080)100-0115</span>
              </p>

              <div className="flex space-x-3 mt-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=61577095617174"
                  className="text-black"
                >
                  <FaFacebook className="w-[30px] h-[30px]" />
                </Link>
                <Link
                  href="https://www.instagram.com/l3awad.ma/"
                  className="text-black"
                >
                  <FaInstagramSquare className="w-[30px] h-[30px]" />
                </Link>
                <a href="#" className="text-black">
                  <AiFillTikTok className="w-[30px] h-[30px]" />
                </a>
                <a href="#" className="text-black">
                  <FaPinterestSquare className="w-[30px] h-[30px]" />
                </a>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="200"
            >
              <h3 className="font-semibold mb-2">Mon Compte</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Link href="/account" className="hover:text-black">
                    Mon Compte
                  </Link>
                </li>
                <li>
                  <Link href="/store" className="hover:text-black">
                    Store
                  </Link>
                </li>
                <li>
                  <Link href="/cart" className="hover:text-black">
                    Panier
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Liste de souhaits
                  </a>
                </li>
              </ul>
            </div>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="300"
            >
              <h3 className="font-semibold mb-2">Aide</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Link href="/contact" className="hover:text-black">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-black">
                    FAQs
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Conditions générales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Politique de confidentialité
                  </a>
                </li>
              </ul>
            </div>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="400"
            >
              <h3 className="font-semibold mb-2">Catégories</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-black">
                    Coffres-forts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Meubles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Accessoires
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row justify-between items-center mt-6"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="500"
          >
            <div className="flex space-x-2"></div>
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
            <Text
              className="txt-compact-small"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="600"
            >
              © {new Date().getFullYear()}
              <span className="ml-1 uppercase">{BRAND_NAME}</span>. Tous droits
              réservés.
            </Text>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
