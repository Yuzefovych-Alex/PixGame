import styles from "@/components/BlockUser/Login/LogIn.module.scss";

const LogIn = () => {
    return (
        <div className={styles.login}>
            <div className={styles.login__contaner}>
                <h1 className={styles.login__contaner__title}>Login</h1>
                <div className={styles.login__contaner__writingInput}>
                    <input className={styles.login__contaner__writingInput__name} placeholder="Name"/>
                    <input className={styles.login__contaner__writingInput__email} placeholder="Email"/>
                    <input className={styles.login__contaner__writingInput__password} placeholder="Password"/>
                    <input className={styles.login__contaner__writingInput__confirmPassword} placeholder="Confirm password"/>
                </div>
                <div className={styles.login__contaner__contanerButton}>
                    <button className={styles.login__contaner__contanerButton__button}>Sing in &gt;</button>
                </div>
                <div className={styles.login__contaner__message}>
                    <div className={styles.login__contaner__message__contaner}>
                        <div className={styles.login__contaner__message__contaner__item}></div>
                        <div className={styles.login__contaner__message__contaner__item}></div>
                        <div className={styles.login__contaner__message__contaner__item}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;