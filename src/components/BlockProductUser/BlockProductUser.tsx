import styles from "@/components/BlockProductUser/BlockProductUser.module.scss";
import GetOutBlock from "../GetOutBlock/GetOutBlock";
import Link from "next/link";

const BlockProductUser = () => {
    return (
        <div className={styles.blockProductUser}>
            <div className={styles.blockProductUser__contaner}>
                <div className={styles.blockProductUser__contaner__header}>
                    <Link href={`/market`} passHref style={{ textDecoration: 'none' }}>
                        <h3 className={styles.blockProductUser__contaner__header__return}>&lt;</h3>
                    </Link>
                    <div className={styles.blockProductUser__contaner__header__image}></div>
                    <h3 className={styles.blockProductUser__contaner__header__title}>Telegram</h3>
                </div>
                <div className={styles.blockProductUser__contaner__box}>
                    <div className={styles.blockProductUser__contaner__box__contaner}>
                        <div className={styles.blockProductUser__contaner__box__contaner__imageData}>
                            <div className={styles.blockProductUser__contaner__box__contaner__imageData__contaner}>

                            </div>
                        </div>
                        <div className={styles.blockProductUser__contaner__box__contaner__productData}>
                            <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner}>
                                <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__userData}>
                                    <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__userData__image}></div>
                                    <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__userData__contaner}>
                                        <h3 className={styles.blockProductUser__contaner__box__contaner__productData__contaner__userData__contaner__name}>Guy</h3>
                                        <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__userData__contaner__rating}></div>
                                    </div>
                                </div>
                                <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__description}>
                                    askldjflaksdjflas saldkfjlasdkjf alsdjflaksjdf asldkfjasldfj asl;dkfjlksadjf
                                </div>
                                <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__price}>
                                    <h3 className={styles.blockProductUser__contaner__box__contaner__productData__contaner__price__title}>20$</h3>
                                </div>
                                <Link href={'/pay'} style={{textDecoration: 'none'}}>
                                    <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__button}>Bay</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.blockProductUser__contaner__footer}>
                    <div className={styles.blockProductUser__contaner__footer__contaner}>
                        <GetOutBlock />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockProductUser;