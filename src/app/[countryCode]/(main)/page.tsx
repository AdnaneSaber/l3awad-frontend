import { Metadata } from "next"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import OurProducts from "@modules/home/components/our-products"
import Services from "@modules/home/components/services"
import Features from "@modules/home/components/features"
import ListAbout from "@modules/home/components/list-about"
import Swiper2 from "@modules/home/components/theswip"
import Philosophie from "@modules/home/components/philosophie"
import Incentive from "@modules/home/components/incentive"
import WhyUs from "@modules/home/components/why-us"
import HomeBlock from "../../../modules/home/components/home-block/index"
import About from "@modules/home/components/about"
import AboutHome from "@modules/home/components/main-about"
import React from "react"
import { BRAND_NAME } from "@lib/brand-config"

export const metadata: Metadata = {
  title: `${BRAND_NAME} | Home`,
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <React.Fragment>
      <Hero />
      <FeaturedProducts collections={collections} region={region} />
      <AboutHome />
      <Services />
      <ListAbout />
      <Swiper2 />
      <Incentive />
      <WhyUs />
      <Features />
      <HomeBlock />
      <Philosophie />
    </React.Fragment>
  )
}
