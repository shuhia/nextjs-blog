import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Layout.module.scss";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home, pageName }) {
  return (
    <div className={styles.body}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <div className={styles.background}>
        <Navbar></Navbar>
        <div className={styles.container}>
          <h1 className={styles.title}>{pageName}</h1>
          <>{children}</>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
