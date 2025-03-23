'use client';

import styles from "@/components/Comments/Comments.module.scss";
import { useEffect } from "react";

interface CommentsProps{
    number: number;
}


const Comments: React.FC<CommentsProps> = ({number}) => {
    
    useEffect(() => {
        document.documentElement.style.setProperty(
            "--size-columns",
            `${numberBlocks()}`
        );
    }, [number]);
    
    const numberBlocks = () => {
        if ([2,4].includes(number)){
            return number;
        }
        return 4;
    }

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