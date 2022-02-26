import Head from "next/head";
import Image from "next/image";
import CommentList from "../components/comment-list";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Interactive Comments Section</title>
        <meta
          name="description"
          content="Interactive Comments Section challenge for frontendmentor.io"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;800&family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <CommentList />
      </main>
    </div>
  );
}
