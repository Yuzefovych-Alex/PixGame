import styles from '@/components/AddCommentar/AddCommentar.module.scss';

const AddCommentar = () => {
    return (
        <div className={styles.addCommentar}>
            <div className={styles.addCommentar__contaner}>
                <input className={styles.addCommentar__contaner__input}/>
                <button className={styles.addCommentar__contaner__button}>Add</button>
            </div>
        </div>
    );
}

export default AddCommentar;