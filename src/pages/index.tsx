import styles from '../styles/home.module.scss'
import ButtonsCounter from "../components/ButtonsCounter";
import DisplayCounter from "../components/DisplayCounter";

export default function Home() {
  return (
    <div className={styles.container}>
      <DisplayCounter />
      <ButtonsCounter />
    </div>
  )
}
