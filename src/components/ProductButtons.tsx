import { ProductContext } from './ProductCard';
import React, { CSSProperties, useCallback, useContext } from 'react';
import styles from "../styles/styles.module.css";

export interface Props {
    className?: string;
    style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {

    // Extraer mas count del context
    const { counter, increaseBy, maxCount } = useContext(ProductContext)

    // isMaxReached = useCallback, dependencias [counter, maxCount] 
    // TRUE si el count === maxCount
    // FaLSE si es distinto
    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount]
    )
    

    return (
        <div className={`${styles.buttonsContainer} ${className} `}
            style={style}
        >
            <button className={styles.buttonMinus} onClick={() => { increaseBy(-1) }} >
                -
            </button>

            <div className={styles.countLabel} >
                {counter}
            </div>

            <button className={`${styles.buttonAdd} ${(isMaxReached()) ? styles.disabled : ''}`} onClick={() => { increaseBy(+1) }}>
                +
            </button>
        </div>
    )
}