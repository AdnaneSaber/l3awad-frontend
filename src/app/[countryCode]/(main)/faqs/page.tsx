import { Metadata } from "next"

import { BRAND_NAME } from "@lib/brand-config"
import FaqSection from "./component/FaqSection"

export const metadata: Metadata = {
  title: `${BRAND_NAME} | FAQ`,
  description:
    "Find answers to frequently asked questions about our products and services.",
}

export default function FaqPage() {
  return <FaqSection />
}
