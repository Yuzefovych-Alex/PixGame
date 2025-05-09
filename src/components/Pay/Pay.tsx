import styles from "@/components/Pay/Pay.module.scss";
import Image from "next/image";

const Pay = () => {
    return (
        <div className={styles.pay}>
            <div className={styles.pay__container}>
                <div className={styles.pay__container__left}>
                    <ul className={styles.pay__container__left__list}>
                        <li className={styles.pay__container__left__list__item}>
                            <div className={styles.pay__container__left__list__item__img}>
                                <div className={styles.pay__container__left__list__item__img__visa}>
                                    <Image
                                        src="/icons/visa.png"
                                        alt="demo"
                                        fill
                                    />
                                </div>
                                <div className={styles.pay__container__left__list__item__img__master}>
                                    <Image
                                        src="/icons/money.png"
                                        alt="demo"
                                        fill
                                    />
                                </div>

                            </div>
                            <div className={styles.pay__container__left__list__item__data}>
                                <h3 className={styles.pay__container__left__list__item__data__title}>Creadit or debit cart</h3>
                                <p className={styles.pay__container__left__list__item__data__description}>Pay via Visa, Mastercard, or Maestro debit or credit cart</p>
                            </div>
                            <div className={styles.pay__container__left__list__item__button}>
                                <button className={styles.pay__container__left__list__item__button__item}></button>
                            </div>
                        </li>
                        <li className={styles.pay__container__left__list__item}>
                            <div className={styles.pay__container__left__list__item__img}>
                                <div className={styles.pay__container__left__list__item__img__applePay}>
                                    <Image
                                        src="/icons/apple-pay.png"
                                        alt="demo"
                                        fill
                                    />
                                </div>
                            </div>
                            <div className={styles.pay__container__left__list__item__data}>
                                <h3 className={styles.pay__container__left__list__item__data__title}>Apple Pay</h3>
                                <p className={styles.pay__container__left__list__item__data__description}>Pay with Apple Pay</p>
                            </div>
                            <div className={styles.pay__container__left__list__item__button}>
                                <button className={styles.pay__container__left__list__item__button__item}></button>
                            </div>
                        </li>
                        <li className={styles.pay__container__left__list__item}>
                            <div className={styles.pay__container__left__list__item__img}>
                                <div className={styles.pay__container__left__list__item__img__googlePay}>
                                    <Image
                                        src="/icons/google-pay.png"
                                        alt="demo"
                                        fill
                                    />
                                </div>
                            </div>
                            <div className={styles.pay__container__left__list__item__data}>
                                <h3 className={styles.pay__container__left__list__item__data__title}>Google Pay</h3>
                                <p className={styles.pay__container__left__list__item__data__description}>Pay with Google Pay</p>
                            </div>
                            <div className={styles.pay__container__left__list__item__button}>
                                <button className={styles.pay__container__left__list__item__button__item}></button>
                            </div>
                        </li>
                        <li className={styles.pay__container__left__list__item}>
                            <div className={styles.pay__container__left__list__item__img}>
                                <Image
                                    className={styles.pay__container__left__list__item__img__paypal}
                                    src="/icons/paypal.svg"
                                    alt="pay"
                                    fill
                                />
                            </div>
                            <div className={styles.pay__container__left__list__item__data}>
                                <h3 className={styles.pay__container__left__list__item__data__title}>PayPal</h3>
                            </div>
                            <div className={styles.pay__container__left__list__item__button}>
                                <button className={styles.pay__container__left__list__item__button__item}></button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.pay__container__right}>
                    <div className={styles.pay__container__right__selection}></div>

                    <div className={styles.pay__container__right__container}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pay;