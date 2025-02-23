import styles from "@/components/Layout/MultiBox.module.scss";

const MultiBox = () => {
    return (
        <div className={styles.multiBox}>
            <ul className={styles.multiBox__list}>
                <li className={styles.multiBox__list__item}>Offers</li>
                <li className={styles.multiBox__list__item}>Special Offers</li>
                <li className={styles.multiBox__list__item}>Fantasy & Medieval Promo</li>
                <li className={styles.multiBox__list__item}>Strategy Promo</li>
                <li className={styles.multiBox__list__item}>More</li>
            </ul>
        </div>
    );
};

export default MultiBox;