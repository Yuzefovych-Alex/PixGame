import styles from "@/components/Panel/Description/Description.module.scss";

const Description = () => {
    return (
        <div className={styles.description}>
            <div className={styles.description__contaner}>
                <textarea className={styles.description__contaner__input}></textarea>
            </div>
        </div>
    );
}

export default Description;