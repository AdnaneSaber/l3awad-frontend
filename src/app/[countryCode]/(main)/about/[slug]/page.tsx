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

  // 🔽 Fetch region and collections
  const region = await getRegion(countryCode)
  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  const fullText = aboutItem.object_text.replaceAll("{BRAND_NAME}", BRAND_NAME)

  return (
    <div className="max-w-screen-xl mx-auto relative">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{
          minHeight: "500px",
          backgroundImage: `url(${aboutItem.photo})`,
        }}
        title={aboutItem.name}
      ></div>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  {aboutItem.name}
                </h2>
                <p className="mb-4">{fullText}</p>
                <p>
                  We are strategists, designers and developers. Innovators and
                  problem solvers. Small enough to be simple and quick.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img
                  className="w-full"
                  src={aboutItem.photo2}
                  alt="office content 1"
                />
                <img
                  className="mt-4 w-full lg:mt-10"
                  src={aboutItem.photo3}
                  alt="office content 2"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {region && collections && (
        <FeaturedProducts collections={collections} region={region} />
      )}

      <InfiniteMovingCardsDemo />
      <ProductSpecial />
    </div>
  )
}
