import styles from "@/components/Footer/Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__container__boxData}>
                    <div className={styles.footer__container__boxData__logo}></div>
                    <div className={styles.footer__container__boxData__message}>
                        <div className={styles.footer__container__boxData__message__item}></div>
                        <div className={styles.footer__container__boxData__message__item}></div>
                        <div className={styles.footer__container__boxData__message__item}></div>
                        <div className={styles.footer__container__boxData__message__item}></div>
                    </div>
                    <div className={styles.footer__container__boxData__about}>
                        <h3 className={styles.footer__container__boxData__about__title}>About us</h3>
                        <ul className={styles.footer__container__boxData__about__list}>
                            <li className={styles.footer__container__boxData__about__list__item}>About us</li>
                            <li className={styles.footer__container__boxData__about__list__item}>About us</li> 
                        </ul>
                    </div>
                    <div className={styles.footer__container__boxData__partner}>
                        <h3 className={styles.footer__container__boxData__partner__title}>Business partner</h3>
                        <ul className={styles.footer__container__boxData__partner__list}>
                            <li className={styles.footer__container__boxData__partner__list__item}>Epic Life</li>
                        </ul>
                    </div>
                    <div className={styles.footer__container__boxData__contact}>
                        <h3 className={styles.footer__container__boxData__contact}>Contact Us</h3>
                    </div>
                </div>
                <div className={styles.footer__boxDate}>
                    <h3 className={styles.footer__boxDate__title}>©PixGames - 2025</h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
