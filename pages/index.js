import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Hello World!</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rerum
        similique numquam esse ducimus illum! Sit sint ea quam nisi. Voluptatum
        at nihil deserunt accusantium cumque porro quis! Aperiam, vero!
      </p>
      <p className={styles.text}>
        Corrupti magni quia numquam consectetur provident aspernatur esse a.
        Neque quia ipsum porro dolorem, adipisci ipsam consequuntur tempore a
        eveniet. Labore ipsum porro illo aut dolorem sit suscipit voluptates
        placeat.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
