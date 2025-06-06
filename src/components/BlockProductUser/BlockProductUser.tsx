import styles from '@/components/BlockProductUser/BlockProductUser.module.scss'
import GetOutBlock from '../GetOutBlock/GetOutBlock'
import Link from 'next/link'

interface BlockProductUserProps {
  type: string
  rating: number
  title: string
  price: number
  sell: number
  lastPrice: number
  date: string
}

const BlockProductUser: React.FC<BlockProductUserProps> = ({ type, rating, title, price, sell, lastPrice, date, }) => {
  return (
    <div className={styles.blockProductUser}>
      <div className={styles.blockProductUser__section}></div>

      <div className={styles.blockProductUser__contaner}>
        <div className={styles.blockProductUser__contaner__header}>
          <Link href="/market" passHref style={{ textDecoration: 'none' }}>
            <h3 className={styles.blockProductUser__contaner__header__return}>
              &lt;
            </h3>
          </Link>
          <div className={styles.blockProductUser__contaner__header__image}></div>
          <h3 className={styles.blockProductUser__contaner__header__title}>Telegram</h3>
        </div>

        <div className={styles.blockProductUser__contaner__box}>
          <div className={styles.blockProductUser__contaner__box__contaner}>
            <div className={styles.blockProductUser__contaner__box__contaner__imageData}>
              <div className={styles.blockProductUser__contaner__box__contaner__imageData__contaner}></div>
            </div>

            <div className={styles.blockProductUser__contaner__box__contaner__productData}>
              <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner}>
                <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__priceData}>
                  <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__priceData__lastPrice}>$100</div>
                  <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__priceData__price}>$90</div>
                  <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__priceData__discount}>-20%</div>
                </div>

                <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__description}>
                  🎁 Schedule I + 99 000 ігор в Steam з прогресом та ексклюзивними подарунками 🎁
                  Миттєвий доступ та чеки. Підтримка 24/7.
                </div>

                <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__rating}>★★★★★</div>

                <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__buy}>
                  <button className={styles.blockProductUser__contaner__box__contaner__productData__contaner__buy__buttonBuy}>Buy</button>
                  <button className={styles.blockProductUser__contaner__box__contaner__productData__contaner__buy__buttonAddBasket}>Add Basket</button>
                </div>

                <div className={styles.blockProductUser__contaner__box__contaner__productData__contaner__guarantor}> Guardion PixGame &gt;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockProductUser;
