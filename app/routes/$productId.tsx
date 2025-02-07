import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { request, gql } from "graphql-request"

import styles from "../styles/product.module.css"

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
  const response = useLoaderData<typeof loader>()
  const product = response.product
  const price = product.variants.edges[0].node.price

  return (
    <>
      <main className={styles.product}>
        <h1>{product.title}</h1>
        <img src={product.featuredImage.url} alt={product.title} />

        <p className={styles.description}>{product.description}</p>
        <div className={styles.price}>
          {price.amount} {price.currencyCode}
        </div>
        <button className={styles.add}>Add to basket</button>
      </main>
    </>
  )
}
