import styles from "@/components/BlockDataGame/BlockGame.module.scss";

const BlockDataGame = () => {
    return (
        <>
            <div className={styles.blockData}>
                <div className={styles.blockData__contaner}>
                    <div className={styles.blockData__contaner__header}>
                        <div className={styles.blockData__contaner__header__image}>
                            
                        </div>
                        <div className={styles.blockData__contaner__header__section}></div>
                        <div className={styles.blockData__contaner__header__data}></div>
                    </div>
                    <div className={styles.blockData__contaner__main}>
                        <h3 className={styles.blockData__contaner__main__title}>Description</h3>
                        <p className={styles.blockData__contaner__main__content}>With The Last of Us Part II Remastered, you'll be immersed in an updated version of Naughty Dog's acclaimed adventure game. The remastered version features improved graphics, updated textures, increased detail and 4K support on PS5. The events of the game are set several years after The Last of Us, where Ellie and Joel live in a settlement in Jackson. But after tragic events, their world falls apart and Ellie, driven by a thirst for revenge, sets off on a dangerous journey.</p>
                        <div className={styles.blockData__contaner__main__section}></div>
                        <h4 className={styles.blockData__contaner__main__titleStore}>Buy The Last of Prt II Remaster</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlockDataGame;