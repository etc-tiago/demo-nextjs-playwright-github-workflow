import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { push } = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} id="title">
          Homepage
        </h1>

        <div className={styles.grid}>
          <Link href="/link-01">
            <a className={styles.card} id="go-to-link-1">
              <h2>Link 01</h2>
            </a>
          </Link>
        </div>
        <div className={styles.grid}>
          <button
            className={styles.card}
            id="go-to-link-2"
            onClick={() => {
              console.log("button go-to-link-2 clicked");
              push("/link-02");
            }}
          >
            <h2>Link 02</h2>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
