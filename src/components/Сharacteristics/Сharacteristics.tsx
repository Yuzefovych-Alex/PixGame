'use client';

import styles from "@/components/Сharacteristics/Characteristics.module.scss";
import { useState } from "react";
import Image from "next/image";


interface CharacteristicsProps {
    minimum: minimum;
    recommended: recommended;
}

const Characteristics: React.FC<CharacteristicsProps> = ({ minimum, recommended }) => {
    const [currentData, setCurrentData] = useState(minimum);
    const [activeButton, setActiveButton] = useState<"minimum" | "recommended">("minimum");


    const buttonMinimum = () => {
        setCurrentData(minimum);
        setActiveButton("minimum");
    };
    
    const buttonRecommended = () => {
        setCurrentData(recommended);
        setActiveButton("recommended");
    };
    

    return (
        <div className={styles.characteristics}>
            <div className={styles.characteristics__contaner}>
                <h3 className={styles.characteristics__contaner__title}>System Requirements</h3>
                <div className={styles.characteristics__contaner__buttons}>
                    <button
                        className={`${styles.characteristics__contaner__buttons__buttonOne} ${activeButton === "minimum" ? styles.active : ""
                            }`}
                        onClick={buttonMinimum}
                    >
                        Minimum
                    </button>
                    <button
                        className={`${styles.characteristics__contaner__buttons__buttonTwo} ${
                            activeButton === "recommended" ? styles.active : ""
                        }`}
                        onClick={buttonRecommended}
                    >
                        Recommended
                    </button>
                </div>
                <ul className={styles.characteristics__contaner__list}>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}>
                            <Image
                                className={styles.characteristics__contaner__list__item__box_image}
                                src="/icons/window.png"
                                alt="Icon"
                                fill
                            />
                        </div>
                        <p className={styles.characteristics__contaner__list__item__title}>{currentData.os}</p>
                    </li>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}>
                            <Image
                                className={styles.characteristics__contaner__list__item__box_image}
                                src="/icons/cpu.png"
                                alt="Icon"
                                fill
                            />
                        </div>
                        <p className={styles.characteristics__contaner__list__item__title}>{currentData.cpu}</p>
                    </li>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}>
                            <Image
                                className={styles.characteristics__contaner__list__item__box_image}
                                src="/icons/ram.png"
                                alt="Icon"
                                fill
                            />
                        </div>
                        <p className={styles.characteristics__contaner__list__item__title}>{currentData.ram} GB</p>
                    </li>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}>
                            <Image
                                className={styles.characteristics__contaner__list__item__box_image}
                                src="/icons/gpu.png"
                                alt="Icon"
                                fill
                            />
                        </div>
                        <p className={styles.characteristics__contaner__list__item__title}>{currentData.gpu}</p>
                    </li>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}>
                            <Image
                                className={styles.characteristics__contaner__list__item__box_image}
                                src="/icons/disk.png"
                                alt="Icon"
                                fill
                            />
                        </div>
                        <p className={styles.characteristics__contaner__list__item__title}>{currentData.disk} GB</p>
                    </li>
                    <li className={styles.characteristics__contaner__list__item}>
                        <div className={styles.characteristics__contaner__list__item__box}>
                            <Image
                                className={styles.characteristics__contaner__list__item__box_image}
                                src="/icons/directx.png"
                                alt="Icon"
                                fill
                            />
                        </div>
                        <p className={styles.characteristics__contaner__list__item__title}>{currentData.directx}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Characteristics;
