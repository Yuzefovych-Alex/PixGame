import styles from "@/components/Layout/MultiBox.module.scss";
import Link from "next/link";

const MultiBox = () => {
    return (
        <div className={styles.multiBox}>
            <ul className={styles.multiBox__list}>
                <li className={styles.multiBox__list__item}>
                    <Link href="" className={styles.multiBox__list__item__link}>Offers</Link>
                </li>
                <li className={styles.multiBox__list__item}>
                    <Link href="/dfff" className={styles.multiBox__list__item__link}>Special Offers</Link>
                </li>
                <li className={styles.multiBox__list__item}>
                    <Link href="/adsf" className={styles.multiBox__list__item__link}>Fantasy & Medieval Promo</Link>
                </li>
                <li className={styles.multiBox__list__item}>
                    <Link href="/adf" className={styles.multiBox__list__item__link}>Strategy Promo</Link>
                </li>
                <li className={styles.multiBox__list__item}>
                    <Link href="/jk" className={styles.multiBox__list__item__link}>More</Link>
                </li>
            </ul>
        </div>
    );
};

export default MultiBox;