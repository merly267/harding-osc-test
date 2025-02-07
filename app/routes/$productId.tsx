import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { request, gql } from "graphql-request"

export async function loader() {
  const query = gql`
    {
      product(id: "gid://shopify/Product/7982905098262") {
        id
        title
        description
        featuredImage {
          id
          url
        }
        variants(first: 3) {
          edges {
            cursor
            node {
              id
              title
              image {
                url
              }
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `
  const response = await request("https://mock.shop/api", query)
  return json(response)
}

export default function IndexRoute() {
  const response = useLoaderData()
  const product = response.product
  const price = product.variants.edges[0].node.price
  // console.log(product.variants.edges[0].node.price.amount)

  return (
    <>
      {/* {JSON.stringify(product)} */}
      <main>
        <h1>{product.title}</h1>
        <img src={product.featuredImage.url} alt={product.title} />

        <p>{product.description}</p>
        <div>
          {price.amount} {price.currencyCode}
        </div>
      </main>
    </>
  )
}
