import styles from "@/components/Basket/Basket.module.scss";
import Image from "next/image";
//import { FaUserCircle } from "react-icons/fa";

const Basket = () => {
    const user = {
        name: "John Doe",
        email: "john.doe@gmail.com"
    };

    const cartItems = [
        {
            title: "The Last of Us Part II",
            platform: "STEAM",
            qty: 1,
            price: 165,
            image: ""
        },
        {
            title: "The Last of Us Part II",
            platform: "STEAM",
            qty: 1,
            price: 165,
            image: ""
        }
    ];

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

    return (
        <div className={styles.basket}>
            <div className={styles.container}>
                
                <div className={styles.cart}>
                    <h2>Your Cart ({totalItems} items)</h2>

                    {cartItems.map((item, index) => (
                        <div className={styles.cart_item} key={index}>
                            <div className={styles.cart_img}>
                                <Image src={item.image || "/placeholder.jpg"} alt="game" fill />
                            </div>
                            <div className={styles.cart_details}>
                                <h3>{item.title}</h3>
                                <div className={styles.platform}>{item.platform}</div>
                                <div className={styles.qty}>
                                    <button>-</button>
                                    <span>{item.qty}</span>
                                    <button>+</button>
                                </div>
                            </div>
                            <div className={styles.price}>{item.price * item.qty} ₴</div>
                            <button className={styles.button_delete}>x</button>
                        </div>
                    ))}

                    <div className={styles.total}>
                        <span>Total</span>
                        <span>{totalPrice} ₴</span>
                    </div>

                    <button className={`${styles.btn} ${styles.checkout}`}>Checkout</button>
                    <button className={`${styles.btn} ${styles.continue}`}>Continue Shopping</button>

                    <div className={styles.bonus}>
                        🎁 You have 2 bonus points. Use them at checkout!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;
