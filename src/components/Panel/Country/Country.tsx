import styles from "@/components/Panel/Country/Country.module.scss";

const Country = () => {
    return(
        <div className={styles.country}>
            <div className={styles.country__contaner}>
                <div className={styles.country__contaner__title}>Coutry</div>
                <div className={styles.country__contaner__buttons}>
                    <button>Amerika</button>
                    <button>Europe</button>
                    <button>CIS</button>
                </div>
                <div className={styles.country__contaner__options}>
                    <div className={styles.country__contaner__options}>
                        <h5 className={styles.country__contaner__options__item}>sell</h5>
                        <input></input>
                    </div>
                </div>
                <div className={styles.country__contaner__options}>
                    <h5 className={styles.country__contaner__options__item}>price</h5>
                    <input></input>
                </div>
                <div className={styles.country__contaner__options}>
                    <h5 className={styles.country__contaner__options__item}>convert</h5>
                    <input></input>
                </div>
                <div className={styles.country__contaner__options}>
                    <h5 className={styles.country__contaner__options__item}>price last</h5>
                    <input></input>
                </div>
            </div>
        </div>
    );
};

export default Country;