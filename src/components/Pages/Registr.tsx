import Image from "next/image";
import styles from "@/components/Pages/Registr.module.scss"


const Registr = () => {
    return (
        <div className={styles.singIn}>
            <div className={styles.singIn__contener}>
                <input className={styles.singIn__email}/>
                <input className={styles.singIn__pasword}/>
                <button className={styles.singIn__button}>SING IN</button>
            </div>
        </div>
    );
};

export default Registr;