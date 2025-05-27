import styles from "@/components/Event/Event.module.scss";

const Event = () => {
    return (
        <div className={styles.event}>
            <div className={styles.event__contaner}>
                <div className={styles.event__contaner__title}>
                    <h3 className={styles.event__contaner__title__text}>Events</h3>
                    <div className={styles.event__contaner__title__section}></div>
                </div>
                <ul className={styles.event__contaner__list}>
                    <li className={styles.event__contaner__list__item}>
                        <div className={styles.event__contaner__list__item__box}>
                            <div className={styles.event__contaner__list__item__box__new}>New</div>
                            <div className={styles.event__contaner__list__item__box__image}></div>
                        </div>
                    </li>
                    <li className={styles.event__contaner__list__item}>
                        <div className={styles.event__contaner__list__item__box}>
                            <div className={styles.event__contaner__list__item__box__new}>New</div>
                            <div className={styles.event__contaner__list__item__box__image}></div>
                        </div>
                    </li>
                    <li className={styles.event__contaner__list__item}>
                        <div className={styles.event__contaner__list__item__box}>
                            <div className={styles.event__contaner__list__item__box__new}>New</div>
                            <div className={styles.event__contaner__list__item__box__image}></div>
                        </div>
                    </li>
                    <li className={styles.event__contaner__list__item}>
                        <div className={styles.event__contaner__list__item__box}>
                            <div className={styles.event__contaner__list__item__box__new}>New</div>
                            <div className={styles.event__contaner__list__item__box__image}></div>
                        </div>
                    </li>
                </ul>
                <ul className={styles.event__contaner__buttons}>
                    <li className={styles.event__contaner__buttons__item}></li>
                    <li className={styles.event__contaner__buttons__item}></li>
                    <li className={styles.event__contaner__buttons__item}></li>
                    <li className={styles.event__contaner__buttons__item}></li>
                </ul>
            </div>
        </div>
    );
};

export default Event;