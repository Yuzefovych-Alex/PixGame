"use client"; 

import { useState } from "react";
import styles from "@/components/SliderPhoto/SliderPhoto.module.scss";

const SliderPhoto = () => {
    const [positionItemSlider, setPositionItemSlider] = useState(0); 

    const buttonLeft = () => {
        setPositionItemSlider((prev) => {
            if (prev < 0) {
                return prev + 132.8;
            }
            return prev;
        }); 
    };

    const buttonRight = () => {
        setPositionItemSlider((prev) => prev - 30); 
    };

    return (
        <div className={styles.sliderPhoto}>
            <div className={styles.sliderPhoto__contaner}>
                <ul className={styles.sliderPhoto__contaner__list}>
                    <li className={styles.sliderPhoto__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}px)` }}></li>
                    <li className={styles.sliderPhoto__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}px)` }}></li>
                    <li className={styles.sliderPhoto__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}px)` }}></li>
                    <li className={styles.sliderPhoto__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}px)` }}></li>
                    <li className={styles.sliderPhoto__contaner__list__item} style={{ transform: `translateX(${positionItemSlider}px)` }}></li>
                </ul>
                <div className={styles.sliderPhoto__contaner__buttons}>
                    <button 
                        className={styles.sliderPhoto__contaner__buttons__left} 
                        onClick={buttonLeft}
                    >
                        &lt;
                    </button>
                    <button 
                        className={styles.sliderPhoto__contaner__buttons__right} 
                        onClick={buttonRight}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SliderPhoto;
