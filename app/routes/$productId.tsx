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
      }
    }
  `
  const response = await request("https://mock.shop/api", query)
  return json(response)
}

export default function IndexRoute() {
  const response = useLoaderData()

  return <>{JSON.stringify(response)}</>
}
