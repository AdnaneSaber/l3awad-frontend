"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

let aosInitialized = false

export default function ClientOnlyAOSWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (!aosInitialized) {
      AOS.init({ offset: 100, duration: 1000, once: true })
      aosInitialized = true
    }
  }, [])

  return <>{children}</>
}
