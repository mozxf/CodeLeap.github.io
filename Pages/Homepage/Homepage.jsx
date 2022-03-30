import styles from "./Homepage.module.scss";
import logo from "/src/Assets/codeleap_logo_black.svg";
import { Link } from "react-router-dom";


export const HomePage = () => {



    

    return (
        <section className={styles.container}>
            <img className={styles.logo}  src={logo}/>
            <Link  className={styles.link} to="/login">click here to log-in </Link>
        </section>
    )
}