import styles from "./novapagina.module.css" 
import Link from "next/link"


export default function NovaPagina(){
    return(
        <main className={styles.main_container}>
            
        <Topo/>     
            <div className={styles.card_container}>

                <h1> NOva Página</h1>
                <p> Nova página de aplicação</p>

                <Link href='/'>Back to home</Link>

            </div>
        </main>
    )
}