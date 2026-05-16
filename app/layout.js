import Link from "next/link";
import Head from "./head";
import "./globals.css";
import "./fanta.css";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import { Eczar, Grenze } from "next/font/google";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "Krazystore",
  description: "A super cool store for programmers and productivity"
}

const eczar = Eczar({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const grenze = Grenze({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-grenze",
  display: "swap",
});



export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
      <html lang="en">
        <Head />
        <body>
          <div id="portal" />
          <div id="app">
            <header>
              <div className="header-content">
                <Link href="/">
                  <h1 >Krazystore</h1>
                </Link>

                <h5 className="mid-text">- Cool stuff for cool people -</h5>
                <Cart />
              </div>
            </header>

            <main>
              {children}
            </main>

            <div className="hr" />
            <footer>
              <div className="email-container">
                <h5>Get a sneak peak at new additions to the store, special offers and so much more</h5>
                <EmailInput />
              </div>
              <div className="links-container">
                <div>
                  <h3>Mkiskrazy</h3>
                  <Link href={'/'}>Moodly</Link>
                  <Link href={'/'}>Caffinated</Link>
                </div>
                <div>
                  <h3>Store</h3>
                  <Link href={'/'}>Home</Link>
                  <Link href={'/cart'}>Cart</Link>
                </div>
                <div>
                  <h3>Support</h3>
                  <Link href={'/contact'}>Contact</Link>
                  <Link href={'/faq'}>FAQ</Link>
                </div>
              </div>
              <div className="socials">
                <p>©️ <a href="https://www.maheshkrishnadev.in" target="_blank">Mahesh</a> 2025</p>
                <div className="social-links">
                  <Link href={'https://github.com/MKisKrazy'} target="_blank"><i className="fa-brands fa-github"></i></Link>
                  <Link href={'https://www.linkedin.com/in/maheshkrishna02/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                  <Link href={'https://discordapp.com/users/375315945960243220'} target="_blank"><i className="fa-brands fa-discord"></i></Link>
                </div>
              </div>
            </footer>
          </div>

        </body>
      </html>
    </ProductsProvider>
  );
}
