import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const WithStatesPage: NextPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title} id="counter-value">
          {count}
        </h1>

        <button
          id="increase-btn"
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Link 02
        </button>
      </main>
    </div>
  );
};

export default WithStatesPage;
