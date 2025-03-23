'use client';

import styles from "@/components/Carts/Store/Carts.module.scss";
import Image from "next/image";
import { ReactNode, useEffect } from "react";

interface CartsProps{
    numberBlocks: numberBlocks;
}

const Carts: React.FC<CartsProps> = ({numberBlocks}) => {
    useEffect(()=>{
        document.documentElement.style.setProperty(
            "--size-carts",
            `${sizeMedia()}`
          );

    }, [numberBlocks]);

    const sizeMedia = () => {
        if ([3, 4, 5].includes(numberBlocks)){
            return numberBlocks;
        }
        return 0;
    };
    return (
        <>
            <li className={styles.cart__item}  style={{ borderRadius: '1.3rem'}}>
                    <div className={styles.cart__item__header}>
                        <h3 className={styles.cart__item__header__title}>Stalker 2</h3>
                    </div>
                    <div className={styles.cart__item__contaner}>
                        <Image className={styles.cart__item__contaner__image} src="/images/phot-1.jpg" alt="asf" fill/>
                    </div>
                    <div className={styles.cart__item__dataGood}>
                        <div className={styles.cart__item__dataGood__contaner}>
                            <div className={styles.cart__item__dataGood__contaner__data}>
                                <div className={styles.cart__item__dataGood__contaner__data__item}></div>
                                <div className={styles.cart__item__dataGood__contaner__data__item}></div>
                                <div className={styles.cart__item__dataGood__contaner__data__date}>10.02.25</div>
                            </div>
                            <div className={styles.cart__item__dataGood__contaner__boxPrice}>
                                <div className={styles.cart__item__dataGood__contaner__boxPrice__sell}>
                                    <h2 className={styles.cart__item__dataGood__contaner__boxPrice__sell__title}>
                                        20
                                    </h2>
                                </div>
                                <div className={styles.cart__item__dataGood__contaner__boxPrice__price}>
                                    <h2 className={styles.cart__item__dataGood__contaner__boxPrice__price__title}>
                                        - 10$
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cart__item_dataGood__box}>
                            <div className={styles.cart__item__dataGood__box__rating}>
                                <span className={styles.cart__item__dataGood__box__rating__item}>★</span>
                                <span className={styles.cart__item__dataGood__box__rating__item}>★</span>
                                <span className={styles.cart__item__dataGood__box__rating__item}>★</span>
                                <span className={styles.cart__item__dataGood__box__rating__item}>★</span>
                                <span className={styles.cart__item__dataGood__box__rating__item}>★</span>
                            </div>
                        </div>
                    </div>
                </li>
        </>
    );
};

export default Carts;