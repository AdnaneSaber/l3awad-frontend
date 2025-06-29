"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function ClientOnlyAOSWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 1000, once: true })
  }, [])

  return <>{children}</>
}
