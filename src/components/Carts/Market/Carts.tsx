'use client';

import styles from "@/components/Carts/Market/Carts.module.scss";
import Image from "next/image";
import { useEffect } from "react";

interface CartsProps {
    numberBlock: number;
    type: string;
    rating: number;
    title: string;
    price: number;
    sellPrice: number;
    lastPrice: number;
    date: string;
}

const StarRating = ({ rating, maxStars = 5 }: { rating: number; maxStars?: number }) => {
    return (
        <div className={styles.cart__item__dataGood__contaner__data__box__rating}>
            {Array.from({ length: maxStars }).map((_, index) => (
                <span
                    key={index}
                    className={styles.cart__item__dataGood__contaner__data__box__rating__item}
                    style={{ color: index < rating ? '#A954FC' : '#A954FC' }}
                >
                    {index < rating ? '★' : '☆'}
                </span>
            ))}
        </div>
    );
};

const SellPrice = ({ sellPrice }) => {
    const showPlaceholder = !sellPrice;
    const style = showPlaceholder
        ? { backgroundColor: '#38214E', color: '#38214E' } 
        : { backgroundColor: 'white', color: '#1b1422' };

    return (
        <div className={styles.cart__item__dataGood__contaner__boxPrice__sell__sell} style={style}>
            -{sellPrice}%
        </div>
    );
}

const LastPrice = ({ lastPrice }) => {
    if (lastPrice === 0 || lastPrice === null) {
        return (
            <>
                
            </>
        );
    } else {
        return (
            <>
                {lastPrice}
            </>
        );
    }
}

const Carts: React.FC<CartsProps> = ({ numberBlock, type, date, rating, title, price, lastPrice, sellPrice }) => {
    const sizeMedia = () => {
        if ([3, 4, 5].includes(numberBlock)) {
            return numberBlock;
        }
        return 0;
    };



    useEffect(() => {
        document.documentElement.style.setProperty(
            "--size-columns-number",
            `${sizeMedia()}`
        );
    }, [numberBlock]);


    const formatDate = (isoDate: string) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString('uk-UA', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    };

    return (
        <li className={styles.cart__item} style={{ borderRadius: '1.3rem' }}>
            <div className={styles.cart__item__header}>
                <div className={styles.cart__item__header__image}></div>
                <h3 className={styles.cart__item__header__title}>{type}</h3>
            </div>
            <div className={styles.cart__item__contaner}>
                <Image
                    className={styles.cart__item__contaner__image}
                    src="/images/phot-1.jpg"
                    alt="asf"
                    fill

                />
            </div>
            <div className={styles.cart__item__dataGood}>
                <div className={styles.cart__item__dataGood__contaner}>
                    <div className={styles.cart__item__dataGood__contaner__data}>
                        <div className={styles.cart__item__dataGood__contaner__data__description}>
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className={styles.cart__item__dataGood__contaner__data__section}>
                            <div className={styles.cart__item__dataGood__contaner__data__section__date}>
                                <span className={styles.cart__item__dataGood__contaner__data__section__date__item}>🗓</span>{formatDate(date)}
                            </div>

                            <div className={styles.cart__item_dataGood__contaner__data__section__box}>
                                <StarRating rating={rating} />
                            </div>
                        </div>
                    </div>



                    <div className={styles.cart__item__dataGood__contaner__boxPrice}>

                        <div className={styles.cart__item__dataGood__contaner__boxPrice__sell}>
                            <SellPrice sellPrice={sellPrice}/>
                        </div>

                        <div className={styles.cart__item__dataGood__contaner__boxPrice__box}>
                            <div className={styles.cart__item__dataGood__contaner__boxPrice__box__sell}>
                                <h2 className={styles.cart__item__dataGood__contaner__boxPrice__box__sell__title}>
                                    <LastPrice lastPrice={lastPrice}/>
                                </h2>
                            </div>
                            <div className={styles.cart__item__dataGood__contaner__boxPrice__box__price}>
                                <h2 className={styles.cart__item__dataGood__contaner__boxPrice__box__price__title}>
                                    {price}$
                                </h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </li>
    );
};

export default Carts;
