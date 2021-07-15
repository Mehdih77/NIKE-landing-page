import Link from 'next/link'
import styles from './header.module.css'

function Header() {
    return (
        <nav className={`${styles.custom_navbar}`}>
        <img className={styles.logo} src='./images/logo.png' alt='logo' />
            <li><Link href='/'><a>HOME</a></Link></li>
            <li><Link href='/featured'><a>FEARURED</a></Link></li>
            <li><Link href='/product'><a>PRODUCT</a></Link></li>
            <li><Link href='/explore'><a>EXPLORE</a></Link></li>
            <li><Link href='/contactus'><a>CONTACT US</a></Link></li>
            <div className={styles.shop_basket}>
                <div className={styles.shop_basket_circle}></div>
                <div className={styles.shop_basket_rope}>ــــــــــــــــــــــــــــ</div>
                <div className={styles.shop_basket_icon}><Link href='/basket-shop'><i class="fas fa-shopping-cart"></i></Link></div>
            </div>
        </nav>
    )
}

export default Header
