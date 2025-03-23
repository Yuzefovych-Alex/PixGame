import Image from "next/image";
import Comments from "../Comments/Comments";
import Characteristics from "../Сharacteristics/Сharacteristics";
import styles from "@/components/BlockDataGame/BlockGame.module.scss";
import SliderPhoto from "../SliderPhoto/SliderPhoto";

const BlockDataGame = () => {
    return (
        <>
            <div className={styles.blockData}>
                <div className={styles.blockData__contaner}>
                    <div className={styles.blockData__contaner__leftBlock}>
                        <div className={styles.blockData__contaner__leftBlock__header}>
                            <div className={styles.blockData__contaner__leftBlock__header__image}>
                                <div className={styles.blockData__contaner__leftBlock__header__image__rating}>
                                    <span className={styles.blockData__contaner__leftBlock__header__image__rating__item}>★</span>
                                    <span className={styles.blockData__contaner__leftBlock__header__image__rating__item}>★</span>
                                    <span className={styles.blockData__contaner__leftBlock__header__image__rating__item}>★</span>
                                    <span className={styles.blockData__contaner__leftBlock__header__image__rating__item}>★</span>
                                    <span className={styles.blockData__contaner__leftBlock__header__image__rating__item}>★</span>
                                </div>
                                <Image
                                    className={styles.blockData__contaner__leftBlock__header__image__photo}
                                    src="/images/phot-1.jpg"
                                    alt="asf"
                                    layout="fill" 
                                    objectFit="cover"
                                />
                                <div className={styles.blockData__contaner__leftBlock__header__image__sell}>
                                    <h3 className={styles.blockData__contaner__leftBlock__header__image__sell__title}>-20%</h3>
                                </div>
                            </div>
                            <div className={styles.blockData__contaner__leftBlock__header__section}>
                                <div className={styles.blockData__contaner__leftBlock__header__section__line}></div>
                                <div className={styles.blockData__contaner__leftBlock__header__section__cube}></div>
                            </div>
                            <div className={styles.blockData__contaner__leftBlock__header__data}>
                                <h3 className={styles.blockData__contaner__leftBlock__header__data__nameGame}>The Last of Us Part II Remaster</h3>
                                <div className={styles.blockData__contaner__leftBlock__header__data__dataGame}>
                                    <div className={styles.blockData__contaner__leftBlock__header__data__dataGame__os}>
                                        <div className={styles.blockData__contaner__leftBlock__header__data__dataGame__os__image}></div>
                                        <div className={styles.blockData__contaner__leftBlock__header__data__dataGame__os__image}></div>
                                    </div>
                                    <div className={styles.blockData__contaner__leftBlock__header__data__dataGame__date}>10.02.25</div>
                                </div>
                                <div className={styles.blockData__contaner__leftBlock__header__data__developer}>
                                    <h3 className={styles.blockData__contaner__leftBlock__header__data__developer__title}>Developer:</h3>
                                    <p className={styles.blockData__contaner__leftBlock__header__data__developer__content}>Naughty Dog LLC, Nixxes Software, Iron Galaxy Studios</p>
                                </div>
                                <div className={styles.blockData__contaner__leftBlock__header__data__publisher}>
                                    <h3 className={styles.blockData__contaner__leftBlock__header__data__publisher__title}>Publisher:</h3>
                                    <p className={styles.blockData__contaner__leftBlock__header__data__publisher__content}>PlayStation Publishing LLC</p>
                                </div>
                            </div>
                        </div>
                        <Characteristics/>
                    </div>
                    <div className={styles.blockData__contane__rightBlock}>
                        <div className={styles.blockData__contaner__rightBlock__main}>
                            <h3 className={styles.blockData__contaner__rightBlock__main__title}>Description</h3>
                            <p className={styles.blockData__contaner__rightBlock__main__content}>With The Last of Us Part II Remastered, you'll be immersed in an updated version of Naughty Dog's acclaimed adventure game. The remastered version features improved graphics, updated textures, increased detail and 4K support on PS5. The events of the game are set several years after The Last of Us, where Ellie and Joel live in a settlement in Jackson. But after tragic events, their world falls apart and Ellie, driven by a thirst for revenge, sets off on a dangerous journey.</p>
                            <div className={styles.blockData__contaner__rightBlock__main__section}></div>
                            <h4 className={styles.blockData__contaner__rightBlock__main__titleStore}>Buy The Last of Prt II Remaster</h4>
                            <ul className={styles.blockData__contaner__rightBlock__main__listStore}>
                                <li className={styles.blockData__contaner__rightBlock__main__listStore__item}>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri}>
                                        <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri__id}>1.</div>
                                        <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri__name}>Amerika</div>
                                    </div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__price}>-20%</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__buy}>16$</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__convert}>16$</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__sell}>20$</div>
                                </li>
                                <li className={styles.blockData__contaner__rightBlock__main__listStore__item}>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri}>
                                        <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri__id}>2.</div>
                                        <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri__name}>Europe</div>
                                    </div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__price}>0%</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__buy}>20$</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__convert}>19$</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__sell}></div>
                                </li>
                                <li className={styles.blockData__contaner__rightBlock__main__listStore__item}>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri}>
                                        <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri__id}>3.</div>
                                        <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri__name}>CIS</div>
                                    </div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__price}>0%</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__buy}>20$</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__convert}>16$</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__sell}></div>
                                </li>
                            </ul>
                            <div className={styles.blockData__contaner__rightBlock__main__listProductStore}>
                                <ul className={styles.blockData__contaner__rightBlock__main__listProductStore__itemList}>
                                    <li className={styles.blockData__contaner__rightBlock__main__listProductStore__itemList__item}>
                                        Epic Game
                                    </li>
                                    <div className={styles.blockData__contaner__rightBlock__main__listProductStore__itemList__button}>
                                        Buy
                                    </div>
                                </ul>
                                <ul className={styles.blockData__contaner__rightBlock__main__listProductStore__itemList}>
                                    <li className={styles.blockData__contaner__rightBlock__main__listProductStore__itemList__item}>
                                        STEAM
                                    </li>
                                    <div className={styles.blockData__contaner__rightBlock__main__listProductStore__itemList__button}>
                                        Buy
                                    </div>
                                </ul>
                            </div>
                            <SliderPhoto/>
                        </div>
                        <Comments number={2}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlockDataGame;