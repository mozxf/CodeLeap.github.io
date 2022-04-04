import styles from "./Button.module.scss"
import { Link } from "react-router-dom"


export const Button = ({children, className, disabled, onClick, type, location, ...props}) => {


    if(type === "button") {
    return <button 
    className={styles.button + " " + className} 
    disabled={disabled}
    onClick={onClick}
    {...props}
    >{children}</button>
    }

    if(type === "link") {
        return <Link to={location} className={styles.button} disabled={disabled}>{children}</Link>


    }

    else return null
}