import styles from "@/components/Footer/Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__container__boxData}>
                    <div className={styles.footer__container__boxData__logo}>
                        <Image
                            src={'/images/logo-store.png'}
                            alt="default"
                            fill
                        />
                    </div>
                    <div className={styles.footer__container__boxData__message}>
                        <Link href={'https://www.youtube.com/channel/UCkfyXfnyMbzjYhWd45IfuYw'}>
                            <div className={styles.footer__container__boxData__message__item}>
                                <div className={styles.footer__container__boxData__message__item__image}>
                                    <Image
                                        src={'/icons/youtube.png'}
                                        alt="D"
                                        fill
                                    />
                                </div>
                            </div>
                        </Link>
                        <Link href={'https://x.com/PixGameWorld'}>
                            <div className={styles.footer__container__boxData__message__item}>
                                <div className={styles.footer__container__boxData__message__item__image}>
                                    <Image
                                        src={'/icons/twitter.png'}
                                        alt="D"
                                        fill
                                    />
                                </div>
                            </div>
                        </Link>
                        <Link href={'https://t.me/PurplePixGameNews'}>
                            <div className={styles.footer__container__boxData__message__item}>
                                <div className={styles.footer__container__boxData__message__item__image}>
                                    <Image
                                        src={'/icons/communication.png'}
                                        alt="D"
                                        fill
                                    />
                                </div>
                            </div>
                        </Link>
                        <Link href={'https://www.instagram.com/pix_game_world/'}>
                            <div className={styles.footer__container__boxData__message__item}>
                                <div className={styles.footer__container__boxData__message__item__image}>
                                    <Image
                                        src={'/icons/instagram.png'}
                                        alt="D"
                                        fill
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.footer__container__boxData__about}>
                        <h3 className={styles.footer__container__boxData__about__title}>About us:</h3>
                        <ul className={styles.footer__container__boxData__about__list}>
                            <li className={styles.footer__container__boxData__about__list__item}>
                                <div className={styles.footer__container__boxData__about__list__item__image}>
                                    <Image
                                        src={'/icons/docs.png'}
                                        alt="default"
                                        fill
                                    />
                                </div>
                                Agreement
                            </li>
                            <li className={styles.footer__container__boxData__about__list__item}>
                                <div className={styles.footer__container__boxData__about__list__item__image}>
                                    <Image
                                        src={'/icons/info.png'}
                                        alt="default"
                                        fill
                                    />
                                </div>
                                About the project
                            </li>
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
                    <h4 className={styles.footer__boxDate__title}>©PixGames - 2025</h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
