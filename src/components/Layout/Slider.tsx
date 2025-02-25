import styles from "@/components/Layout/Slider.module.scss";
import Image from "next/image";

const Slider = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.slider__contaner}>
                <ul className={styles.slider__contaner__list}>
                    <li className={styles.slider__contaner__list__item}>
                        <h3 className={styles.slider__contaner__list__item__sell}>50%</h3>
                    </li>
                    <li className={styles.slider__contaner__list__item}>
                        <h3 className={styles.slider__contaner__list__item__sell}>60%</h3>
                    </li>
                    <li className={styles.slider__contaner__list__item}>
                        <h3 className={styles.slider__contaner__list__item__sell}>70%</h3>
                    </li>
                    <li className={styles.slider__contaner__list__item}>
                        <h3 className={styles.slider__contaner__list__item__sell}>80%</h3>
                    </li>
                    <li className={styles.slider__contaner__list__item}>
                        <h3 className={styles.slider__contaner__list__item__sell}>90%</h3>
                    </li>
                    <li className={styles.slider__contaner__list__item}>
                        <h3 className={styles.slider__contaner__list__item__sell}>90%</h3>
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