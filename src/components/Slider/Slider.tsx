import styles from "@/components/Slider/Slider.module.scss";
//import Image from "next/image";

const Slider = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.slider__contaner}>
                <ul className={styles.slider__contaner__list}>
                    <li className={styles.slider__contaner__list__item}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-50%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                    <li className={styles.slider__contaner__list__item}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-50%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                    <li className={styles.slider__contaner__list__item}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                            <span className={styles.slider__contaner__list__item__rating__item}>★</span>
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-50%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                </ul>
                <div className={styles.slider__contander__buttons}>
                    <ul className={styles.slider__contaner__buttons__list}>
                        <li className={styles.slider__contaner__buttons__list__item}></li>
                        <li className={styles.slider__contaner__buttons__list__item}></li>
                        <li className={styles.slider__contaner__buttons__list__item}></li>
                        <li className={styles.slider__contaner__buttons__list__item}></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Slider; 