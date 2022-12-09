import Head from "next/head";
import Header from "../components/header/header.component";
import styles from "../styles/Home.module.scss";
import Ticket from "../components/ticket/ticket.component";
import { useState } from "react";

const modal = () => {
  return (
    <div>
      <Ticket></Ticket>
      <div className={styles["modal-background"]}></div>
    </div>
  );
};

export default function UserHome() {
  const [isOpen, setOpen] = useState(!false);

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
        <Header></Header>
        <div className={styles["modal-container"]}>
          <button
            className={`${styles["button"]} btn-unstyled`}
            onClick={() => setOpen(!isOpen)}
            type="button"
          >
            + Añade tu ticket
          </button>
          {isOpen && modal()}
        </div>
      </main>
    </div>
  );
}
