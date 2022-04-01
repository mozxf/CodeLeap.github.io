import styles from "./PostBox.module.scss";
import { formatDistance } from 'date-fns';
import { GlobalContext } from "../../Context/GlobalContent";
import { useContext } from "react";


export const PostBox = ({title, username, date, content, tools }) => {

    const now = new Date();
    const datePost = new Date(date);
    const theDate = formatDistance(datePost, now, {addSuffix: true} )

    return (
        <div className={styles.postContainer}>
                <header className={styles.postHeader}>
                    <span>{title}</span>
                    {tools &&  
                    <div className={styles.toolBox}>
                        <img src="/src/Assets/Delete.svg" /> 
                        <img src="/src/Assets/Edit.svg" /> 
                    </div> } 
                    </header>



                <div className={styles.postWrapper}>
                    <span className={styles.postUsername}>@{username}</span>
                    <span className={styles.postTime}>{theDate}</span>
                    <p className={styles.postContent}> {content} </p>
                </div>
            </div>
    )
}