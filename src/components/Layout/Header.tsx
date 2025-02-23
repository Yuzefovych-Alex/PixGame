import styles from "@/components/Layout/Header.module.scss";
import Image from "next/image";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__contaner}>
                <div className={styles.header__contaner__logo}>
                    <Image className={styles.header__contaner__logo__img} src="/images/logo.png" alt="Logo" fill/>
                </div>
                <ul className={styles.header__contaner__list}>
                    <li className={styles.header__contaner__list__item}>Main</li>
                    <li className={styles.header__contaner__list__item}>About us</li>
                    <li className={styles.header__contaner__list__item}>Support</li>
                </ul>
                <div className={styles.header__contaner__login}>Log in</div>
            </div>
        </header>
    );
};

export default Header;
