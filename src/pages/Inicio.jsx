import { Alien, BracketsCurly, AddressBook } from 'phosphor-react'
import { Header } from '../components/Header'
import homeImg from '../assets/home.svg'

import styles from '../styles/Pages/inicio.module.css'

export function Inicio() {
  return (
    <>
     <Header text="Meu site pessoal" image={homeImg} />
     <div className={styles.homeContainer}>
      <div className={styles.cardContainer}>
        <Alien size={150} color="#8a2be2" weight="thin" />
        <h2 className={styles.cardTitle}>Hi</h2>
        
      </div>
      <div className={styles.cardContainer}>
        <BracketsCurly size={150} color="#686AAC" weight="thin"/>
        <h2 className={styles.cardTitle}></h2>
        <p className={styles.cardText}>Eu conto um pouquinho sobre mim, minha formação, a história da minha migração de carreira, gostos e curiosidades.</p>
        <p className={styles.cardText}></p>
      </div>
      <div className={styles.cardContainer}>
        <AddressBook size={150} color="#686AAC" weight="thin"/>
        <h2 className={styles.cardTitle}>Contact me</h2>
        <p className={styles.cardText}></p>
      </div>
     </div>
    </>
  )
}