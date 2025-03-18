import styles from "@/components/Carts/Market/Carts.module.scss";

const Carts = () => {
    return (
        <>
            <li className={styles.cart__item}>
                <div className={styles.cart__item__contaner}>
                    <div className={styles.cart__item__contaner__header}>
                        <h3 className={styles.cart__item__contaner__header__title}>Telegram</h3>
                    </div>
                    <div className={styles.cart__item__contaner__content}>
                        <div className={styles.cart__item__contaner__content__image}></div>
                        <div className={styles.cart__item__contaner__content__content}>
                            Lorem ipsum dolor asdfkjalksdjf alksejdflkasdj alksdjf
                        </div>
                    </div>
                    <div className={styles.cart__item__contaner__footer}>
                        <div className={styles.cart__item__contaner__footer__contaner}>
                            <div className={styles.cart__item__contaner__footer__contaner__part1}>
                                <div className={styles.cart__item__contaner__footer__contaner__part1__date}>10.02.25</div>
                                <div className={styles.cart__item__contaner__footer__contaner__part1__star}>
                                    <span className={styles.cart__item__contaner__footer__contaner__part1__star__item}>★</span>
                                    <span className={styles.cart__item__contaner__footer__contaner__part1__star__item}>★</span>
                                    <span className={styles.cart__item__contaner__footer__contaner__part1__star__item}>★</span>
                                    <span className={styles.cart__item__contaner__footer__contaner__part1__star__item}>★</span>
                                    <span className={styles.cart__item__contaner__footer__contaner__part1__star__item}>★</span>
                                </div>
                            </div>
                            <div className={styles.cart__item__contaner__footer__contaner__part2}>
                                <div className={styles.cart__item__contaner__footer__contaner__part2__price}>
                                    <h3 className={styles.cart__item__contaner__footer__contaner__part2__price__initial}>20</h3>
                                    <h3 className={styles.cart__item__contaner__footer__contaner__part2__price__section}>-</h3>
                                    <h3 className={styles.cart__item__contaner__footer__contaner__part2__price__next}>16$</h3>
                                </div>
                                <div className={styles.cart__item__contaner__footer__contaner__part2__sell}>
                                    -20%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default Carts;
