import styles from "@/components/Panel/Rating/Rating.module.scss";

const Rating = () => {
    return(
        <div className={styles.rating}>
            <div className={styles.rating__contaner}>
                <div className={styles.rating__contaner__buttons}>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                </div>
            </div>
        </div>
    );
};

export default Rating;