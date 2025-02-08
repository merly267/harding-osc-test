import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { useState } from "react"
import type { LinksFunction } from "@remix-run/node"
import styles from "./styles/root.module.css"

import "./tailwind.css"

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const [basketVisible, setBasketVisible] = useState(false)
  const toggleBasket = () => {
    setBasketVisible(!basketVisible)
  }
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav>
          <ul className={styles.nav}>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>
              <button onClick={toggleBasket}>Basket</button>
            </li>
          </ul>
        </nav>
        <section
          className={`${styles.basket} ${
            basketVisible ? styles.visible : null
          }`}
        >
          basket things
        </section>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
