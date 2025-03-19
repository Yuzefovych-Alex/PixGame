import styles from "@/components/MultiBox/MultiBox.module.scss";
import Link from "next/link";

const MultiBox = () => {
    return (
        <div className={styles.multiBox}>
            <ul className={styles.multiBox__list}>
                <li className={styles.multiBox__list__item}>
                    <Link href="" className={styles.multiBox__list__item__link}>All</Link>
                </li>
                <li className={styles.multiBox__list__item}>
                    <Link href="/dfff" className={styles.multiBox__list__item__link}>For you</Link>
                </li>
                <li className={styles.multiBox__list__item}>
                    <Link href="/adsf" className={styles.multiBox__list__item__link}>Hot</Link>
                </li>
                <li className={styles.multiBox__list__item}>
                    <Link href="/adf" className={styles.multiBox__list__item__link}>Best</Link>
                </li>
                <li className={styles.multiBox__list__item}>
                    <Link href="/jk" className={styles.multiBox__list__item__link}>More</Link>
                </li>
            </ul>
        </div>
    );
};
export default MultiBox;