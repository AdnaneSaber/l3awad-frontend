import React from "react"
import UnOrderedList3 from "../UnorderedList"

const HomeBlock = () => {
  return (
    <section className="mt-11">
      <h2 className="text-center text-4xl font-bold leading-8 text-black">
        Locking Mechanisms
      </h2>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="p-4 max-w-sm">
          <div className="flex w-full h-full bg-[#f2f2f2] text-black p-8 flex-col">
            <UnOrderedList3
              title="Magnetic Lock"
              items={[
                "Installed by default in all products",
                "Purely mechanical lock",
                "Can be easily opened with the accompanying magnet",
              ]}
            />
          </div>
        </div>
        <div className="p-4 max-w-sm">
          <div className="flex w-full h-full bg-[#f2f2f2] text-black p-8 flex-col">
            <UnOrderedList3
              title="Electronic lock"
              items={[
                "Replaces the standard locking mechanism",
                "Identification via transponder card",
                "RFID 125kHz technology",
                "MIFARE RFID 13,56MHz technology",
                "No power connection required, locks are battery operated",
              ]}
            />
          </div>
        </div>
        <div className="p-4 max-w-sm">
          <div className="flex w-full h-full bg-[#f2f2f2] text-black p-8 flex-col">
            <UnOrderedList3
              title="Bluetooth lock"
              items={[
                "replaces the standard locking mechanism",
                "Identification via smartphone (Bluetooth)",
                "works without a mobile network and internet connection",
                "No power connection required, locks are battery operated",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBlock
