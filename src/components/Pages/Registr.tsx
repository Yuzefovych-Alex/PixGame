//import Image from "next/image";
import styles from "@/components/Pages/Registr.module.scss"


const Registr = () => {
    return (
        <div className={styles.singIn}>
            <div className={styles.singIn__contaner}>
                <input className={styles.singIn__contaner__email} placeholder="Email"/>
                <input className={styles.singIn__contaner__password} placeholder="Password"/>
                <button className={styles.singIn__contaner__button} >SING IN</button>
            </div>
        </div>
    );
};

export default Registr;