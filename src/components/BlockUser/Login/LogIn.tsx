import styles from "@/components/BlockUser/Login/LogIn.module.scss";
import Link from "next/link";

const LogIn = () => {
    return (
        <div className={styles.login}>
        <div className={styles.login__contaner}>
            <h1 className={styles.login__contaner__title}>Login</h1>
            <div className={styles.login__contaner__writingInput}>
                <input className={styles.login__contaner__writingInput__email} placeholder="Email"/>
                <input className={styles.login__contaner__writingInput__password} placeholder="Password"/>
            </div>
            <div className={styles.login__contaner__data}>
                <div className={styles.login__contaner__data__contaner}>
                    <h5 className={styles.login__contaner__data__contaner__password}>forgot you password?</h5>
                    <Link href={'/user/singin'} >
                        <h5 className={styles.login__contaner__data__contaner__login}>Sing in?</h5>
                    </Link>
                </div>
            </div>
            <div className={styles.login__contaner__contanerButton}>
                <button className={styles.login__contaner__contanerButton__button}>Login</button>
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