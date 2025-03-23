  'use client';

import styles from "@/components/BlockProduct/MuiBox.module.scss";
import { ReactNode, useEffect } from "react";

interface MuiBoxProps {
    children: ReactNode;
    numberBlocks: numberBlocks;
}

const MuiBox: React.FC<MuiBoxProps> = ({ children, numberBlocks }) =>  {
    
    useEffect(() => {
        document.documentElement.style.setProperty(
          "--size-columns-muibox",
          `${sizeMedia()}`
        );
      }, [numberBlocks]);
    
      const sizeMedia = () => {
        if ([3, 4, 5].includes(numberBlocks)) {
          return numberBlocks;
        }
        return 0; 
      };
    

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