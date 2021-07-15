import Head from 'next/head'
import styles from '../styles/Home.module.css'

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   return {
//     props: { userData: data }
//   }
// }


function Index({userData}) {
  return (
    <>
    <Head>
      <title>Home Page</title>  
  </Head>
    <section className={`${styles.landing_page} container-fluid`}>
        <div className={styles.main}>
          <div className={styles.title}>NIKE <span>SHOES</span></div>
          <div className={styles.text}>Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services</div>
        </div>
        <img className={styles.shoes_img} src='./images/nike.png' alt='nike-shoes' />
      <div className={styles.main_bottom}>
        <button>BUY NOW</button>
        <div className={styles.social_icons}>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        </div>
      </div>
    </section>
    </>
  )
}

export default Index
