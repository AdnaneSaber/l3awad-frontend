import { Abouts } from "@/types/about"
import { BRAND_NAME } from "@lib/brand-config"
import ProductSpecial from "@modules/products/templates/product-special"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { slugify } from "@lib/slugify"
import { getRegion } from "@lib/data/regions"
import { listCollections } from "@lib/data/collections"
import FeaturedProducts from "@modules/home/components/featured-products"
import { InfiniteMovingCardsDemo } from "@modules/home/components/InfiniteMovingCardsdemo"
import AboutContent from "./components/AboutContent"
import ClientOnlyAOSWrapper from "@lib/ClientOnlyAOSWrapper"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const aboutItem = Abouts.find((item) => slugify(item.name) === params.slug)

  if (!aboutItem) return { title: `${BRAND_NAME} | Not Found` }

  return {
    title: `${BRAND_NAME} | ${aboutItem.name}`,
    description: `Learn more about us at ${BRAND_NAME}`,
  }
}

export default async function AboutDetailPage({
  params,
}: {
  params: { countryCode: string; slug: string }
}) {
  const { countryCode, slug } = params

  const aboutItem = Abouts.find((item) => slugify(item.name) === slug)

  if (!aboutItem) return notFound()

  const region = await getRegion(countryCode)
  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  const fullText = aboutItem.object_text.replaceAll("{BRAND_NAME}", BRAND_NAME)

  return (
    <ClientOnlyAOSWrapper>
      <div className="max-w-screen-xl mx-auto relative">
        <div
          data-aos="fade-down"
          data-aos-duration="300"
          className="bg-cover bg-center text-center overflow-hidden"
          style={{
            minHeight: "500px",
            backgroundImage: `url(${aboutItem.photo})`,
          }}
          title={aboutItem.name}
        ></div>

        <div
          className="max-w-7xl mx-auto"
          data-aos="fade-down"
          data-aos-duration="400"
        >
          <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <AboutContent
              name={aboutItem.name}
              fullText={fullText}
              photo2={aboutItem.photo2}
              photo3={aboutItem.photo3}
            />
          </div>
        </div>
        <div data-aos="zoom-out-up" data-aos-duration="600">
          <InfiniteMovingCardsDemo />
        </div>

        <div data-aos="zoom-out-down" data-aos-duration="700">
          <ProductSpecial />
        </div>

        {region && collections && (
          <FeaturedProducts collections={collections} region={region} />
        )}
      </div>
    </ClientOnlyAOSWrapper>
  )
}
