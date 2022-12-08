import Head from "next/head";
import Header from "../components/header/header.component";
import styles from "../styles/Home.module.css";

const modalData = {
  title: "Añade el nombre del error o su id",
  description: "Añade la descripción del error",
  timeSpend: "Añade tu tiempo invertido",
};

const modal = () => {
  return (
    <div>
      <h1>{modalData.title}</h1>
      <p>{modalData.description}</p>
      <p>{modalData.timeSpend}</p>
    </div>
  );
};

export default function Home() {
  function setOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>TimeOut</title>
        <meta
          name="description"
          content="Time tracker and error percentage per error calculator"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header></Header>
        <a onClick={() => setOpen(true)} type="button">
          Añade tu ticket
        </a>
      </main>
    </div>
  );
}
