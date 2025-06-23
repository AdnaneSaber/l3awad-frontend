"use client"

import { useState } from "react"
import Image from "next/image"

const tabs = [
  {
    id: "tabs-with-card-1",
    title: "Des cambriolages rarement élucidés",
    description: `94 % des cambriolages restent non résolus chaque année dans le monde.
Les méthodes de sécurité classiques ne suffisent plus à dissuader les voleurs.`,
    icon: (
      <svg
        className="shrink-0 mt-2 size-6 md:size-7 text-gray-800 dark:text-neutral-200"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
      </svg>
    ),
    image: "/home/features (1).jpg",
  },
  {
    id: "tabs-with-card-2",
    title: " Un risque bien réel, même au Maroc",
    description: `78 % des personnes sont victimes d’un cambriolage au moins une fois dans leur vie.
Nos foyers ne sont pas à l’abri — même dans les quartiers réputés calmes.`,
    icon: (
      <svg
        className="shrink-0 mt-2 size-6 md:size-7 text-gray-800 dark:text-neutral-200"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </svg>
    ),
    image: "/home/features (1).png",
  },
  {
    id: "tabs-with-card-3",
    title: "Des pertes souvent importantes",
    description: `Dans 44 % des cas, les objets volés dépassent une valeur de 10 000 MAD.
Documents, bijoux, argent liquide ou souvenirs familiaux... souvent irremplaçables.`,
    icon: (
      <svg
        className="shrink-0 mt-2 size-6 md:size-7 text-gray-800 dark:text-neutral-200"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4M19 17v4M3 5h4M17 19h4" />
      </svg>
    ),
    image: "/home/features (2).png",
  },
]

export default function Philosophie() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl font-bold sm:text-3xl text-black">
              Pourquoi la sécurité discrète est essentielle ?
            </h2>

            <nav
              className="grid gap-4 mt-5 md:mt-10"
              role="tablist"
              aria-orientation="vertical"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5  dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 ${
                    activeTab === tab.id
                      ? "bg-white shadow-md dark:bg-neutral-700"
                      : ""
                  }`}
                >
                  <span className="flex gap-x-6">
                    {tab.icon}
                    <span className="grow">
                      <span
                        className={`block text-lg font-semibold ${
                          activeTab === tab.id ? "text-black" : "text-gray-800"
                        }`}
                      >
                        {tab.title}
                      </span>
                      <span className="block mt-1 text-gray-800 dark:text-neutral-200">
                        {tab.description}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              {tabs.map((tab) =>
                activeTab === tab.id ? (
                  <div
                    key={tab.id}
                    className="transition-opacity duration-500 ease-in-out opacity-100 animate-fade-in"
                  >
                    <Image
                      className="shadow-xl  dark:shadow-gray-900/20"
                      src={tab.image}
                      alt="Features Image"
                      width={560}
                      height={720}
                    />
                  </div>
                ) : null
              )}

              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-black"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 grid grid-cols-12 size-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6  sm:h-3/4 lg:h-full "></div>
        </div>
      </div>
    </div>
  )
}
