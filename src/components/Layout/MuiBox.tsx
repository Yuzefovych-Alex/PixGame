import styles from "@/components/Layout/MuiBox.module.scss";
import Image from "next/image";

const MuiBox = () => {
    return (
        <div className={styles.muiBox}>
            <div className={styles.muiBox__contaner}>
                <ul className={styles.muiBox__contaner__list}>
                    <li className={styles.muiBox__contaner__list__item}>
                        <div className={styles.muiBox__contaner__list__item__contaner}>
                            <Image className={styles.muiBox__contaner__list__item__contaner__image} src="/images/71na5zfzbaL.jpg" alt="asf" fill/>
                        </div>
                        <div className={styles.muiBox__contaner__list__item__dataGood}>
                            <h2 className={styles.muiBox__contaner__list__item__dataGood__title}>
                                bla bla
                            </h2>
                            <p className={styles.muiBox__contaner__list__item__dataGood__price}>
                                10$
                            </p>
                        </div>
                    </li>
                    <li className={styles.muiBox__contaner__list__item}>
                        <div className={styles.muiBox__contaner__list__item__contaner}>
                            <Image className={styles.muiBox__contaner__list__item__contaner__image} src="/images/71na5zfzbaL.jpg" alt="asf" fill/>
                        </div>
                        <div className={styles.muiBox__contaner__list__item__dataGood}>
                            <h2 className={styles.muiBox__contaner__list__item__dataGood__title}>
                                bla bla
                            </h2>
                            <p className={styles.muiBox__contaner__list__item__dataGood__price}>
                                10$
                            </p>
                        </div>
                    </li>
                    <li className={styles.muiBox__contaner__list__item}>
                        <div className={styles.muiBox__contaner__list__item__contaner}>
                            <Image className={styles.muiBox__contaner__list__item__contaner__image} src="/images/71na5zfzbaL.jpg" alt="asf" fill/>
                        </div>
                        <div className={styles.muiBox__contaner__list__item__dataGood}>
                            <h2 className={styles.muiBox__contaner__list__item__dataGood__title}>
                                bla bla
                            </h2>
                            <p className={styles.muiBox__contaner__list__item__dataGood__price}>
                                10$
                            </p>
                        </div>
                    </li>
                    <li className={styles.muiBox__contaner__list__item}>
                        <div className={styles.muiBox__contaner__list__item__contaner}>
                            <Image className={styles.muiBox__contaner__list__item__contaner__image} src="/images/71na5zfzbaL.jpg" alt="asf" fill/>
                        </div>
                        <div className={styles.muiBox__contaner__list__item__dataGood}>
                            <h2 className={styles.muiBox__contaner__list__item__dataGood__title}>
                                bla bla
                            </h2>
                            <p className={styles.muiBox__contaner__list__item__dataGood__price}>
                                10$
                            </p>
                        </div>
                    </li>
                    <li className={styles.muiBox__contaner__list__item}>
                        <div className={styles.muiBox__contaner__list__item__contaner}>
                            <Image className={styles.muiBox__contaner__list__item__contaner__image} src="/images/71na5zfzbaL.jpg" alt="asf" fill/>
                        </div>
                        <div className={styles.muiBox__contaner__list__item__dataGood}>
                            <h2 className={styles.muiBox__contaner__list__item__dataGood__title}>
                                bla bla
                            </h2>
                            <p className={styles.muiBox__contaner__list__item__dataGood__price}>
                                10$
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MuiBox;