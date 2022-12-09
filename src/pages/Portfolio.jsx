import { Header } from '../components/Header'
import portfolioImg from '../assets/portfolio.svg'

import styles from '../styles/Pages/portfolio.module.css'

export function Portfolio() {
    return (
      <>
       <Header text="Meu Portfolio" image={portfolioImg} /> 
       <h1 className={styles.container}>-</h1>
      </>
    )
  }