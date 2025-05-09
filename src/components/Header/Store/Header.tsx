import styles from "@/components/Header/Store/Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__contaner}>
                <div className={styles.header__contaner__logo}>
                    <Link href={'/market/'}>
                        <Image className={styles.header__contaner__logo__img} src="/images/logo-store.png" alt="Logo" fill />
                    </Link>
                </div>
                <ul className={styles.header__contaner__list}>
                    <li className={styles.header__contaner__list__item}>Games</li>
                    <li className={styles.header__contaner__list__item}>Pix</li>
                    <li className={styles.header__contaner__list__item}>Info</li>
                    <li className={styles.header__contaner__list__item}>Other</li>
                </ul>
                <Link href={'/user/login'} className={styles.header__contaner__link}>
                    <div className={styles.header__contaner__link__login}>Log in</div>
                </Link>
                <Link href={'/user/shoping'}>
                    <div className={styles.header__contaner__trolley}>
                        <Image
                            className={styles.header__contaner__trolley__image}
                            src="/icons/shopping-cart.png"
                            alt="Logo"
                            fill
                        />
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
