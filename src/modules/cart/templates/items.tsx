import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Heading, Table } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  cart?: HttpTypes.StoreCart
}

const ItemsTemplate = ({ cart }: ItemsTemplateProps) => {
  const items = cart?.items
  return (
    <div>
      <div className="pb-3 flex items-center">
        <Heading className="text-[2.5rem] leading-[2.75rem] font-bold">
          Cart
        </Heading>
      </div>
      <Table className="bg-white">
        <Table.Header className="border-t-0 bg-white">
          <Table.Row className="text-ui-fg-subtle txt-medium-plus bg-white">
            <Table.HeaderCell className="!pl-0 text-black bg-white">
              Item
            </Table.HeaderCell>
            <Table.HeaderCell className="bg-white text-black"></Table.HeaderCell>
            <Table.HeaderCell className="bg-white text-black">
              Quantity
            </Table.HeaderCell>
            <Table.HeaderCell className="hidden small:table-cell bg-white text-black">
              Price
            </Table.HeaderCell>
            <Table.HeaderCell className="!pr-0 text-right bg-white text-black">
              Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="bg-white text-black">
          {items
            ? items
                .sort((a, b) => {
                  return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                })
                .map((item) => {
                  return (
                    <Item
                      key={item.id}
                      item={item}
                      currencyCode={cart?.currency_code}
                    />
                  )
                })
            : repeat(5).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsTemplate
