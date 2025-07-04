import { BRAND_NAME } from "@lib/brand-config"
import { Metadata } from "next"
import React from "react"
import Main from "./components/main"
import About from "./components/about"
import Stats from "./components/stats"
import Infos from "./components/infos"
import Gallery from "./components/gallery"
import ClientOnlyAOSWrapper from "@lib/ClientOnlyAOSWrapper"
export const metadata: Metadata = {
  title: `${BRAND_NAME} | Philosophie`,
  description:
    "Découvrez notre philosophie et notre engagement envers l'artisanat de qualité.",
}

export default function Philosophie() {
  return (
    <main>
      <ClientOnlyAOSWrapper>
        <Main />
        <About />
        <Stats />
        <Infos />
        <Gallery />
      </ClientOnlyAOSWrapper>
    </main>
  )
}
