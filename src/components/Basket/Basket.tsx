import styles from "@/components/Basket/Basket.module.scss";
import Image from "next/image";

/*
interface BasketProps {
    basket: basket;
}
*/

const Basket = () => {
    return (
        <div className={styles.basket}>

            <div className={styles.cart}>
                <h2>Cart</h2>

                <div className={styles.cart_item}>
                    <div className={styles.cart_img}>
                        <Image src={''} alt="default" fill/>
                    </div>
                    <div className={styles.cart_details}>
                        <h3>The Last of Us Part II</h3>
                        <div className={styles.platform}>STEAM</div>
                        <div className={styles.qty}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                    <div className={styles.price}>165 ₴</div>
                    <button className={styles.button_delete}>x</button>
                </div>
                    

                <div className={styles.cart_item}>
                <div className={styles.cart_img}>
                        <Image src={''} alt="default" fill/>
                    </div>
                    <div className={styles.cart_details}>
                        <h3>The Last of Us Part II</h3>
                        <div className={styles.platform}>STEAM</div>
                        <div className={styles.qty}>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                    <div className={styles.price}>165 ₴</div>
                </div>

                <div className={styles.total}>
                    <span>Total</span>
                    <span>330 ₴</span>
                </div>

                <button className={`${styles.btn} ${styles.checkout}`}>Checkout</button>
                <button className={`${styles.btn} ${styles.continue}`}>Continue Shopping</button>
            </div>
        </div>
    );
}

export default Basket;