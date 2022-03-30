import styles from "./Button.module.scss"
import { Link } from "react-router-dom"


export const Button = ({children, disabled, type, location}) => {


    if(type === "button") {
    return <button className={styles.button} disabled={disabled}>{children}</button>
    }

    if(type === "link") {
        return <Link to={location} className={styles.button} disabled={disabled}>{children}</Link>


    }

    else return null
}