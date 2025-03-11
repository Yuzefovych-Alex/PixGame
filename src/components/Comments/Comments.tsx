import styles from "@/components/Comments/Comments.module.scss";

const Comments = () => {
    return (
        <>
            <div className={styles.comments}>
                <div className={styles.comments__contaner}>
                    <div className={styles.comments__contaner__inner}></div>
                    <ul className={styles.comments__contaner__list}>
                        <li className={styles.comments__contaner__list__item}>
                            <div className={styles.comments__contaner__list__item__box1}></div>
                            <div className={styles.comments__contaner__list__item__box2}>
                                <div className={styles.comments__contaner__list__item__box2__box}>
                                    <div className={styles.comments__contaner__list__item__box2__box__photoAcount}></div>
                                    <h3 className={styles.comments__contaner__list__item__box2__box__nameAcount}>Guy</h3>
                                </div>
                                <p className={styles.comments__contaner__list__item__box2__comment}>Comment</p>
                            </div>
                        </li>
                        <li className={styles.comments__contaner__list__item}>
                            <div className={styles.comments__contaner__list__item__box1}></div>
                            <div className={styles.comments__contaner__list__item__box2}>
                                <div className={styles.comments__contaner__list__item__box2__box}>
                                    <div className={styles.comments__contaner__list__item__box2__box__photoAcount}></div>
                                    <h3 className={styles.comments__contaner__list__item__box2__box__nameAcount}>Guy</h3>
                                </div>
                                <p className={styles.comments__contaner__list__item__box2__comment}>Comment</p>
                            </div>
                        </li>
                        <li className={styles.comments__contaner__list__item}>
                            <div className={styles.comments__contaner__list__item__box1}></div>
                            <div className={styles.comments__contaner__list__item__box2}>
                                <div className={styles.comments__contaner__list__item__box2__box}>
                                    <div className={styles.comments__contaner__list__item__box2__box__photoAcount}></div>
                                    <h3 className={styles.comments__contaner__list__item__box2__box__nameAcount}>Guy</h3>
                                </div>
                                <p className={styles.comments__contaner__list__item__box2__comment}>Comment</p>
                            </div>
                        </li>
                        <li className={styles.comments__contaner__list__item}>
                            <div className={styles.comments__contaner__list__item__box1}></div>
                            <div className={styles.comments__contaner__list__item__box2}>
                                <div className={styles.comments__contaner__list__item__box2__box}>
                                    <div className={styles.comments__contaner__list__item__box2__box__photoAcount}></div>
                                    <h3 className={styles.comments__contaner__list__item__box2__box__nameAcount}>Guy</h3>
                                </div>
                                <p className={styles.comments__contaner__list__item__box2__comment}>Comment</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Comments;