import styles from "@/components/Search/Search.module.scss";
import Image from "next/image";

///images/search.png
const Search = () => {
    return (
        <div className={styles.search}>
            <div className={styles.search__contaner}>
                <input className={styles.search__contaner__input} type="text" />
                <div className={styles.search__contaner__img}>
                    <Image className={styles.search__contaner__img__block} src="/images/search.png" alt="search" fill />
                </div>
            </div>
        </div>
    )
};
export default Search;