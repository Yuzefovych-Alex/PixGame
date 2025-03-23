'use client';

import styles from "@/components/Сharacteristics/Characteristics.module.scss";
import { useState } from "react";

const dataMinimum = {
    os: "Windows 10 (64-bit)",
    cpu: "Intel Core i7-6700 ",
    ram: "12 GB",
    gpu: "NVIDIA GeForce GTX 1060   ",
    disk: "70 GB",
    direct: "DirectX 12"
};

const dataRecommended = {
    os: "Windows 11 (64-bit)",
    cpu: "Intel Core i7-6700 ",
    ram: "12 GB",
    gpu: "NVIDIA GeForce GTX 1060",
    disk: "70 GB",
    direct: "DirectX 12"
};

const Characteristics = () => {
    const [currentData, setCurrentData] = useState(dataMinimum);

    const buttonMinimum = () => {
        setCurrentData(dataMinimum);
    };

    const buttonRecommended = () => {
        setCurrentData(dataRecommended);
    };

    return (
        <div className={styles.characteristics}>
            <div className={styles.characteristics__contaner}>
                <h3 className={styles.characteristics__contaner__title}>System Requirements</h3>
                <div className={styles.characteristics__contaner__buttons}>
                    <button
                        className={styles.characteristics__contaner__buttons__buttonOne}
                        onClick={buttonMinimum}
                    >
                        Minimum
                    </button>
                    <button
                        className={styles.characteristics__contaner__buttons__buttonTwo}
                        onClick={buttonRecommended}
                    >
                        Recommended
                    </button>
                </div>
                <ul className={styles.characteristics__contaner__list}>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}></div>
                        <p className={styles.characteristics__contaner__list__item__title}>{currentData.os}</p>
                    </li>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}></div>
                        <p className={styles.characteristics__contaner__list__item__title}>{currentData.cpu}</p>
                    </li>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}></div>
                        <p className={styles.characteristics__contaner__list__item__title}>{currentData.ram}</p>
                    </li>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}></div>
                        <p className={styles.characteristics__contaner__list__item__title}>{currentData.gpu}</p>
                    </li>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}></div>
                        <p className={styles.characteristics__contaner__list__item__title}>{currentData.disk}</p>
                    </li>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}></div>
                        <p className={styles.characteristics__contaner__list__item__title}>{currentData.direct}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Characteristics;
