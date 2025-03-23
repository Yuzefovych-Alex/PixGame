import styles from "@/components/Сharacteristics/Characteristics.module.scss";

const Characteristics = () => {


    return (
        <div className={styles.characteristics}>
            <div className={styles.characteristics__contaner}>
                <h3 className={styles.characteristics__contaner__title}>System requirement</h3>
                <div className={styles.characteristics__contaner__buttons}>
                    <button className={styles.characteristics__contaner__buttons__buttonOne}>Minimum</button>
                    <button className={styles.characteristics__contaner__buttons__buttonTwo}>Recommended</button>
                </div>
                <ul className={styles.characteristics__contaner__list}>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}></div>
                        <p className={styles.characteristics__contaner__list__item__title}>Windows 11, 10(64 - bit)</p>
                    </li>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}></div>
                        <p className={styles.characteristics__contaner__list__item__title}>Windows 11, 10(64 - bit)</p>
                    </li>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}></div>
                        <p className={styles.characteristics__contaner__list__item__title}>Windows 11, 10(64 - bit)</p>
                    </li>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}></div>
                        <p className={styles.characteristics__contaner__list__item__title}>Windows 11, 10(64 - bit)</p>
                    </li>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}></div>
                        <p className={styles.characteristics__contaner__list__item__title}>Windows 11, 10(64 - bit)</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Characteristics;