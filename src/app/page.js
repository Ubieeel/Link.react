import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.page}>
      
      <main className={styles.main}>
        <div className={styles.card_container}>
          <h1>Página Inicial</h1>
          <p> Essa é a página princiapl da aplicação React</p>
          <p>
            Essa página é gerada automaticamente durante a criaçãp do app
          </p>

        <Link href='/novapagina'>Ir para pagina inicial</Link>
        </div>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
