import styles from "@/components/GetOutBlock/GetOutBlock.module.scss";

const GetOutBlock = () => {
    return (
        <div className={styles.getOutBlock}>
            <div className={styles.getOutBlock__contaner}>
                <div className={styles.getOutBlock__contaner__box}>
                    <div className={styles.getOutBlock__contaner__box__contaner}>
                        <h5 className={styles.getOutBlock__contaner__box__contaner__data}>* Log in to your Pix Geme account to write a comment</h5>
                        <div className={styles.getOutBlock__contaner__box__contaner__button}>Get out?</div>
                    </div>
                    <div className={styles.getOutBlock__contaner__section}></div>
                </div>
            </div>
        </div>
    );
};
export default GetOutBlock;