'use client';

import styles from "@/components/Carts/Store/Carts.module.scss";
import Image from "next/image";
import { useEffect } from "react";

interface CartsProps {
    numberBlock: number;
    name: string;
    date: string;
    rating: number;
    price: number;
    sellPrice: number;
    lastPrice: number;
    genre: string;
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

const SellPrice = ({sellPrice}) => {
    if (sellPrice === 0 || sellPrice === null) {
        return (<></>);
    } else {
        return (
            <div className={styles.cart__item__contaner__sell}>
                -{sellPrice}%
            </div>
        );
    }


}

const Carts: React.FC<CartsProps> = ({ numberBlock, name, date, rating, price, lastPrice, genre, sellPrice }) => {
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
                <h3 className={styles.cart__item__header__title}>{name}</h3>
            </div>
            <div className={styles.cart__item__contaner}>
                <Image
                    className={styles.cart__item__contaner__image}
                    src="/images/phot-1.jpg"
                    alt="asf"
                    fill

                />
                <SellPrice sellPrice={sellPrice} />
            </div>
            <div className={styles.cart__item__dataGood}>
                <div className={styles.cart__item__dataGood__contaner}>
                    <div className={styles.cart__item__dataGood__contaner__data}>
                        {/*            <div className={styles.cart__item__dataGood__contaner__data__item}></div>
                        <div className={styles.cart__item__dataGood__contaner__data__item}></div>

                        */}
                        <div className={styles.cart__item__dataGood__contaner__data__date}>
                            <span className={styles.cart__item__dataGood__contaner__data__date__item}>🗓</span>{formatDate(date)}
                        </div>

                        <div className={styles.cart__item_dataGood__contaner__data__box}>
                            <StarRating rating={rating} />
                        </div>

                    </div>
                    <div className={styles.cart__item__dataGood__contaner__boxPrice}>
                        <div className={styles.cart__item__dataGood__contaner__boxPrice__genreBox}>
                            <div className={styles.cart__item__dataGood__contaner__boxPrice__genreBox__image}></div>
                            <h4 className={styles.cart__item__dataGood__contaner__boxPrice__genreBox__title}>{genre}</h4>
                        </div>

                        <div className={styles.cart__item__dataGood__contaner__boxPrice__box}>
                            <div className={styles.cart__item__dataGood__contaner__boxPrice__box__sell}>
                                <h2 className={styles.cart__item__dataGood__contaner__boxPrice__box__sell__title}>
                                    {lastPrice}
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
