import styles from "@/components/BlockUser/SingIn/SingIn.module.scss";

const SingIn = () => {
    return (
        <div className={styles.singIn}>
            <div className={styles.singIn__contaner}>
                <h1 className={styles.singIn__contaner__title}>Sing in</h1>
                <div className={styles.singIn__contaner__writingInput}>
                    <input className={styles.singIn__contaner__writingInput__name} placeholder="Name" />
                    <input className={styles.singIn__contaner__writingInput__email} placeholder="Email" />
                    <input className={styles.singIn__contaner__writingInput__password} placeholder="Password" />
                    <input className={styles.singIn__contaner__writingInput__confirmPassword} placeholder="Confirm password" />
                </div>
                <div className={styles.singIn__contaner__contanerButton}>
                    <button className={styles.singIn__contaner__contanerButton__button}>Sing in &gt;</button>
                </div>
                <div className={styles.singIn__contaner__message}>
                    <div className={styles.singIn__contaner__message__contaner}>
                        <div className={styles.singIn__contaner__message__contaner__item}></div>
                        <div className={styles.singIn__contaner__message__contaner__item}></div>
                        <div className={styles.singIn__contaner__message__contaner__item}></div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SingIn;