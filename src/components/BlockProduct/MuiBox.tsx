import styles from "@/components/BlockProduct/MuiBox.module.scss";
import { ReactNode } from "react";

interface MuiBoxProps {
    children: ReactNode;
}

const MuiBox: React.FC<MuiBoxProps> = ({ children }) =>  {
    return (
        <div className={styles.muiBox}>
        <div className={styles.muiBox__contaner}>
            <ul className={styles.muiBox__contaner__list}>
                {children}
            </ul>
        </div>
    </div>
    );
};

export default MuiBox;