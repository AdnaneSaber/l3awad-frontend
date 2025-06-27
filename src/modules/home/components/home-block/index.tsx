import React from "react"
import UnOrderedList3 from "../UnorderedList"

const HomeBlock = () => {
  return (
    <section className="mt-11">
      <h2 className="text-center text-4xl font-bold leading-8 text-black">
        Mécanismes de Verrouillage
      </h2>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="p-4 max-w-sm">
          <div className="flex w-full h-full bg-[#f2f2f2] text-black p-8 flex-col">
            <UnOrderedList3
              title="Verrou magnétique"
              items={[
                "Installé par défaut dans tous les produits",
                "Verrou purement mécanique",
                "Peut être facilement ouvert avec le magnet fourni",
              ]}
            />
          </div>
        </div>
        <div className="p-4 max-w-sm">
          <div className="flex w-full h-full bg-[#f2f2f2] text-black p-8 flex-col">
            <UnOrderedList3
              title="Verrou électronique"
              items={[
                "Remplace le mécanisme de verrouillage standard",
                "Identification via carte de transpondeur",
                "Technologie RFID 125kHz",
                "Technologie RFID MIFARE 13,56MHz",
                "Aucune connexion électrique requise, les verrous fonctionnent sur batterie",
              ]}
            />
          </div>
        </div>
        <div className="p-4 max-w-sm">
          <div className="flex w-full h-full bg-[#f2f2f2] text-black p-8 flex-col">
            <UnOrderedList3
              title="Verrou Bluetooth"
              items={[
                "Remplace le mécanisme de verrouillage standard",
                "Identification via smartphone (Bluetooth)",
                "Fonctionne sans réseau mobile ni connexion Internet",
                "Aucune connexion électrique requise, les verrous fonctionnent sur batterie",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBlock
