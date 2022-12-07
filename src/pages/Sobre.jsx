import { Header } from '../components/Header'
import contatoImg from '../assets/sobre.svg'
import styles from "../styles/Pages/sobre.module.css"

export function Sobre() {
    return (
      <>
       <Header text="Sobre mim" image={contatoImg} />
       <h1 className={styles.container}>Sobre</h1>
      </>
    )
  }