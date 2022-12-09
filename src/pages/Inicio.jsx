import { HandEye, GenderIntersex, AddressBook } from 'phosphor-react'
import { Header } from '../components/Header'
import homeImg from '../assets/home.svg'

import styles from '../styles/Pages/inicio.module.css'

export function Inicio() {
  return (
    <>
     <Header text="Meu site pessoal" image={homeImg} />
     <div className={styles.homeContainer}>
      <div className={styles.cardContainer}>
      <HandEye size={60} color="#B77FDD" weight="bold" />
        <h2 className={styles.cardTitle}>Olá</h2>
        <p className={styles.cardText}>
Este ano Iniciei estudos em HTML e CSS Módulo I do Segundo Ciclo Formativo @pretalab @olabi</p>       
      </div>
      <div className={styles.cardContainer}>
      <GenderIntersex size={60} color="#B77FDD" weight="bold" />
        <h2 className={styles.cardTitle}></h2>
        <h2 className={styles.cardTitle}>Sobre mim</h2>
        <p className={styles.cardText}>Sou Mare, pretalabber queer no binárie de SP Capital e tenho 21 anos.</p>        
      </div>
      <div className={styles.cardContainer}>
        <AddressBook size={60} color="#B77FDD" weight="bold"/>
        <h2 className={styles.cardTitle}>Meus Projetos desenvolvidos na Pretalab</h2>
        <p className={styles.cardText}></p>
      </div>
     </div>
    </>
  )
}