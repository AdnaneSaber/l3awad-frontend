import { CTASection } from "./component/CTASection"
import { DetailedProduct } from "./component/DetailedProduct"

export const DetailsSection = (props: any) => {
  return (
    <section>
      <div className="flex flex-col p-6 gap-3 md:w-full md:max-w-[600px]">
        <DetailedProduct />
        <CTASection props={props} />
      </div>
    </section>
  )
}
