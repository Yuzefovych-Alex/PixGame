import styles from "@/components/SectionProduct/SectionProduct.module.scss";

const SectionProduct = () => {
    return (
        <div className={styles.sectionProduct}>
            <div className={styles.sectionProduct__contaner}>
                <h3 className={styles.sectionProduct__contaner__title}>Premium product</h3>
                <div className={styles.sectionProduct__contaner__section}></div>
            </div>
        </div>
    );
}

export default SectionProduct;