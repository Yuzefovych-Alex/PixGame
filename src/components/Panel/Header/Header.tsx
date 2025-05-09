import styles from "@/components/Panel/Header/Header.module.scss";

const Header = () => {
    return (
        <>
            <header className={styles.panel__header}>
                <div className={styles.panel__header__contaner}>
                    <h3 className={styles.panel__header__contaner__nameAdmin}>Oleksandr Yuzefovych</h3>
                </div>
            </header>            
        </>
    );
};

export default Header;