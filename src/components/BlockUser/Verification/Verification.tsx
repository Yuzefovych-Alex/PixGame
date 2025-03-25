import styles from "@/components/BlockUser/Verification/Verification.module.scss";

const Verification = () => {
    return (
        <div className={styles.verification}>
            <div className={styles.verification__contaner}>
                <h1 className={styles.verification__contaner__title}>Verification</h1>
                <div className={styles.verification__contaner__writingInput}>
                    <input className={styles.verification__contaner__writingInput__password} placeholder="......"/>
                </div>
                <div className={styles.verification__contaner__data}>
                    <div className={styles.verification__contaner__data__contaner}>
                        <h5 className={styles.verification__contaner__data__contaner__confirmMessage}>Send me the code again</h5>
                    </div>
                </div>
                <div className={styles.verification__contaner__contanerButton}>
                    <button className={styles.verification__contaner__contanerButton__button}>Confirm</button>
                </div>
                <div className={styles.verification__contaner__message}>
                    <div className={styles.verification__contaner__message__contaner}>
                        <div className={styles.verification__contaner__message__contaner__item}></div>
                        <div className={styles.verification__contaner__message__contaner__item}></div>
                        <div className={styles.verification__contaner__message__contaner__item}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verification;