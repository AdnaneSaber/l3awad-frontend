"use client"

import { useState } from "react"
import { Slider } from "../product-slider"
import { DetailsSection } from "../product-detailsSection"

export default function ProductOverView() {
  const [cartCounter, setCartCounter] = useState(0)

  return (
    <div className="flex flex-col md:flex-row md:px-0 md:gap-6 md:py-20  md:justify-center lg:px-14 lg:gap-16">
      <Slider />
      <DetailsSection
        cartCounter={cartCounter}
        setCartCounter={setCartCounter}
      />
    </div>
  )
}
