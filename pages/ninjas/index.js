import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const responseData = await res.json();

  return {
    props: {
      ninjas: responseData.data,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
          <div className={styles.single}>
            <h3>{ninja.email}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
