import styles from "./Button.module.scss"


export const Button = ({children, disabled}) => {

    return <button className={styles.button} disabled={disabled}>{children}</button>
}