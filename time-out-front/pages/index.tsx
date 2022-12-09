import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Time Out</title>
        <meta
          name="description"
          content="Time tracker and error percentage per error calculator"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <h1>
          Welcome to{" "}
          <img
            className={styles[""]}
            src="/logotype.svg"
            alt="timeout-logotype"
          />
        </h1>
        <p>Time tracker and error percentage per error calculator</p>
        <button>
          <a href="/user-home">Go to the App</a>
        </button>
      </main>
    </div>
  );
}
