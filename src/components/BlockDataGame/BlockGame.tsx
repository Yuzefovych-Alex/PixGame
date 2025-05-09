'use client';

import Image from "next/image";
import Link from "next/link";
import Comments from "../Comments/Comments";
import Characteristics from "../Сharacteristics/Сharacteristics";
import styles from "@/components/BlockDataGame/BlockGame.module.scss";
import SliderPhoto from "../SliderPhoto/SliderPhoto";
import AddCommentar from "../AddCommentar/AddCommentar";

interface BlockDataGameProps {
    name: name;
    release_date: release_date;
    developer: developer;
    publisher: publisher;
    description: description;
    minimum: minimum;
    recomended: recomended;
    priceRegionAmerika: priceRegionAmerika;
    priceRegionEurope: priceRegionEurope;
    priceRegionCIS: priceRegionCIS;
    shops: shops;
    comments: comments;
}

const BlockDataGame: React.FC<BlockDataGameProps> = ({ name, release_date, developer, publisher, description, minimum, recomended, priceRegionAmerika, priceRegionEurope, priceRegionCIS, shops, comments }) => {

    const formatDate = (isoDate: string) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString('uk-UA', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    };

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
                                <h3 className={styles.blockData__contaner__leftBlock__header__data__nameGame}>{name}</h3>
                                <div className={styles.blockData__contaner__leftBlock__header__data__dataGame}>
                                    <div className={styles.blockData__contaner__leftBlock__header__data__dataGame__os}>
                                        <div className={styles.blockData__contaner__leftBlock__header__data__dataGame__os__image}></div>
                                        <div className={styles.blockData__contaner__leftBlock__header__data__dataGame__os__image}></div>
                                    </div>
                                    <div className={styles.blockData__contaner__leftBlock__header__data__dataGame__date} >{formatDate(release_date)}</div>
                                </div>
                                <div className={styles.blockData__contaner__leftBlock__header__data__developer}>
                                    <p className={styles.blockData__contaner__leftBlock__header__data__developer__content} >
                                        <h3 className={styles.blockData__contaner__leftBlock__header__data__developer__content__title}>Developer:</h3>
                                        {developer}</p>
                                </div>
                                <div className={styles.blockData__contaner__leftBlock__header__data__publisher}>
                                    <p className={styles.blockData__contaner__leftBlock__header__data__publisher__content} >
                                        <h3 className={styles.blockData__contaner__leftBlock__header__data__publisher__content__title}>Publisher:</h3>
                                        {publisher}</p>
                                </div>
                            </div>
                        </div>
                        <Characteristics minimum={minimum} recommended={recomended} />
                    </div>
                    <div className={styles.blockData__contaner__rightBlock}>
                        <div className={styles.blockData__contaner__rightBlock__section}></div>
                        <div className={styles.blockData__contaner__rightBlock__main}>
                            <h3 className={styles.blockData__contaner__rightBlock__main__title}>Description</h3>
                            <p className={styles.blockData__contaner__rightBlock__main__content} >{description}</p>
                            <div className={styles.blockData__contaner__rightBlock__main__section}></div>
                            <h4 className={styles.blockData__contaner__rightBlock__main__titleStore}>Buy {name}</h4>
                            <ul className={styles.blockData__contaner__rightBlock__main__listStore}>
                                <li className={styles.blockData__contaner__rightBlock__main__listStore__item}>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri}>
                                        <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri__id}>1.</div>
                                        <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri__name}>Amerika</div>
                                    </div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__price}>{priceRegionAmerika.sell_price}%</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__buy}>{priceRegionAmerika.base_price}$</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__convert}>{priceRegionAmerika.converted_price}$</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__sell}>{priceRegionAmerika.last_price}$</div>
                                </li>
                                <li className={styles.blockData__contaner__rightBlock__main__listStore__item}>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri}>
                                        <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri__id}>2.</div>
                                        <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri__name}>Europe</div>
                                    </div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__price}>{priceRegionEurope.sell_price}%</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__buy}>{priceRegionEurope.base_price}$</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__convert}>{priceRegionEurope.converted_price}$</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__sell}>{priceRegionEurope.last_price}$</div>
                                </li>
                                <li className={styles.blockData__contaner__rightBlock__main__listStore__item}>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri}>
                                        <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri__id}>3.</div>
                                        <div className={styles.blockData__contaner__rightBlock__main__listStore__item__countri__name}>CIS</div>
                                    </div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__price}>{priceRegionCIS.sell_price}%</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__buy}>{priceRegionCIS.base_price}$</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__convert}>{priceRegionCIS.converted_price}$</div>
                                    <div className={styles.blockData__contaner__rightBlock__main__listStore__item__sell}>{priceRegionCIS.last_price}$</div>
                                </li>
                            </ul>
                            <div className={styles.blockData__contaner__rightBlock__main__listProductStore}>
                                {shops.map((shops) => (
                                    <Link key={shops} href={shops.link} className={styles.blockData__contaner__rightBlock__main__listProductStore__link}>
                                        <ul className={styles.blockData__contaner__rightBlock__main__listProductStore__link__itemList}>
                                            <li className={styles.blockData__contaner__rightBlock__main__listProductStore__link__itemList__item}>
                                                {shops.name}
                                            </li>
                                            <div className={styles.blockData__contaner__rightBlock__main__listProductStore__link__itemList__sellPrice}>
                                                -10%
                                            </div>
                                            <div className={styles.blockData__contaner__rightBlock__main__listProductStore__link__itemList__shopPrice}>
                                                11$
                                            </div>
                                            <div className={styles.blockData__contaner__rightBlock__main__listProductStore__link__itemList__button}>
                                                Buy
                                            </div>
                                        </ul>
                                    </Link>
                                ))}
                            </div>
                            <SliderPhoto />
                        </div>
                        <AddCommentar/>
                        <Comments number={2} comments={comments}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlockDataGame;