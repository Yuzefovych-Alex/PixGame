import styles from "@/components/Panel/SystemRequirement/SystemRequirement.module.scss";


const SystemRequirement = () => {
    return (
        <>
            <div className={styles.systemRequirement}>
                <div className={styles.systemRequirement__contaner}>
                    <div className={styles.systemRequirement__contaner__buttons}>
                        <button>Minimum</button>
                        <button>Recommended</button>
                    </div>
                    <div className={styles.systemRequirement__contaner__options}>
                        <div className={styles.systemRequirement__contaner__options__system}>
                            <h5 className={styles.systemRequirement__contaner__options__system__title}>Windows:</h5>
                            <input className={styles.systemRequirement__contaner__options__system__input}></input>
                        </div>
                        <div className={styles.systemRequirement__contaner__options__system}>
                            <h5 className={styles.systemRequirement__contaner__options__system__title}>CPU:</h5>
                            <input className={styles.systemRequirement__contaner__options__system__input}></input>
                        </div>
                        <div className={styles.systemRequirement__contaner__options__system}>
                            <h5 className={styles.systemRequirement__contaner__options__system__title}>RAM:</h5>
                            <input className={styles.systemRequirement__contaner__options__system__input}></input>
                        </div>
                        <div className={styles.systemRequirement__contaner__options__system}>
                            <h5 className={styles.systemRequirement__contaner__options__system__title}>GPU:</h5>
                            <input className={styles.systemRequirement__contaner__options__system__input}></input>
                        </div>
                        <div className={styles.systemRequirement__contaner__options__system}>
                            <h5 className={styles.systemRequirement__contaner__options__system__title}>Disk:</h5>
                            <input className={styles.systemRequirement__contaner__options__system__input}></input>
                        </div>
                        <div className={styles.systemRequirement__contaner__options__system}>
                            <h5 className={styles.systemRequirement__contaner__options__system__title}>Direct:</h5>
                            <input className={styles.systemRequirement__contaner__options__system__input}></input>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SystemRequirement;