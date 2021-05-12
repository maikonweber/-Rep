import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
        <div className={styles.bg}>
        <div className={styles.container}> <div className={styles.imgdiv}>
        <Image src="/image.png"
        width="414"
        height="413"
        layout="responsive"
        />
        </div>
        <div className={styles.bgimg}>
        <Image src="/Rectangle3.png"
        width="400px"
        height="500px">
        </Image>
        </div>
        </div>
       </div>
  
    
  )
}
