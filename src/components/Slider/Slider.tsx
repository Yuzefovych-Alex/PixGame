'use client';

import styles from "@/components/Slider/Slider.module.scss";
import { useState, useEffect } from "react";

interface SliderProps {
    sliderData: sliderData;
}

const StarRating = ({ rating, maxStars = 5 }: { rating: number; maxStars?: number }) => {
    return (
        <div className={styles.slider__contaner__list__item__rating__container}>
            {Array.from({ length: maxStars }).map((_, index) => (
                <span
                    key={index}
                    className={styles.slider__contaner__list__item__rating__container__item}
                    style={{ color: index < rating ? '#A954FC' : '#A954FC' }}
                >
                    {index < rating ? '★' : '☆'}
                </span>
            ))}
        </div>
    );
};

const Slider = ({ sliderData }) => {
    const [positionItemSlider, setPositionItemSlider] = useState(0);
    const [transitionDuration, setTransitionDuration] = useState('1s');

    const totalItems = 4;
    const itemWidth = 70.8;

    const pageItemOne = () => {
        setPositionItemSlider(0);
        setTransitionDuration('0.8s');
    };

    const pageItemTwo = () => {
        setPositionItemSlider(-(itemWidth));
        setTransitionDuration('0.8s');
    };

    const pageItemThree = () => {
        setPositionItemSlider(-(itemWidth * 2));
        setTransitionDuration('0.8s');
    };

    const pageItemFore = () => {
        setPositionItemSlider(-(itemWidth * 3));
        setTransitionDuration('1.2s');
    };

    const isActiveButton = (position) => {
        return Math.abs(positionItemSlider - position) < 0.1;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextPosition = positionItemSlider - itemWidth;
            if (nextPosition < -(itemWidth * (totalItems - 1))) {
                setPositionItemSlider(0);
            } else {
                setPositionItemSlider(nextPosition);
            }
        }, 6000);

        return () => clearInterval(interval);
    }, [positionItemSlider, itemWidth, totalItems]);


    return (
        <div className={styles.slider}>
            <div className={styles.slider__contaner}>
                <ul className={styles.slider__contaner__list}>
                    <li className={styles.slider__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}rem)`, transition: `transform ${transitionDuration} ease-in-out` }}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <StarRating rating={4} />
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-50%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                    <li className={styles.slider__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}rem)`, transition: `transform ${transitionDuration} ease-in-out` }}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <StarRating rating={4} />
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-50%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                    <li className={styles.slider__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}rem)`, transition: `transform ${transitionDuration} ease-in-out` }}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <StarRating rating={4} />
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-50%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                    <li className={styles.slider__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}rem)`, transition: `transform ${transitionDuration} ease-in-out` }}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <StarRating rating={4} />
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-60%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                    <li className={styles.slider__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}rem)`, transition: `transform ${transitionDuration} ease-in-out` }}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <StarRating rating={4} />
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-60%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                    <li className={styles.slider__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}rem)`, transition: `transform ${transitionDuration} ease-in-out` }}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <StarRating rating={4} />
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-60%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                    <li className={styles.slider__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}rem)`, transition: `transform ${transitionDuration} ease-in-out` }}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <StarRating rating={4} />
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-70%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                    <li className={styles.slider__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}rem)`, transition: `transform ${transitionDuration} ease-in-out` }}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <StarRating rating={4} />
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-70%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                    <li className={styles.slider__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}rem)`, transition: `transform ${transitionDuration} ease-in-out` }}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <StarRating rating={4} />
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-70%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                    <li className={styles.slider__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}rem)`, transition: `transform ${transitionDuration} ease-in-out` }}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <StarRating rating={4} />
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-80%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                    <li className={styles.slider__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}rem)`, transition: `transform ${transitionDuration} ease-in-out` }}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <StarRating rating={4} />
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-80%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                    <li className={styles.slider__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}rem)`, transition: `transform ${transitionDuration} ease-in-out` }}>
                        <div className={styles.slider__contaner__list__item__rating}>
                            <StarRating rating={4} />
                        </div>
                        <h3 className={styles.slider__contaner__list__item__sell}>-80%</h3>
                        <div className={styles.slider__contaner__list__item__data}>
                            <div className={styles.slider__contaner__list__item__data__os}>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                                <div className={styles.slider__contaner__list__item__data__os__item}></div>
                            </div>
                            <h3 className={styles.slider__contaner__list__item__data__date}>10.02.25</h3>
                        </div>
                    </li>
                </ul>
                <div className={styles.slider__contander__buttons}>
                    <ul className={styles.slider__contaner__buttons__list}>
                        <li
                            className={`${styles.slider__contaner__buttons__list__item} ${isActiveButton(0) ? styles.active : ''}`}
                            onClick={pageItemOne}
                        ></li>
                        <li
                            className={`${styles.slider__contaner__buttons__list__item} ${isActiveButton(-(70.8)) ? styles.active : ''}`}
                            onClick={pageItemTwo}
                        ></li>
                        <li
                            className={`${styles.slider__contaner__buttons__list__item} ${isActiveButton(-(70.8 * 2)) ? styles.active : ''}`}
                            onClick={pageItemThree}
                        ></li>
                        <li
                            className={`${styles.slider__contaner__buttons__list__item} ${isActiveButton(-(70.8 * 3)) ? styles.active : ''}`}
                            onClick={pageItemFore}
                        ></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Slider; 