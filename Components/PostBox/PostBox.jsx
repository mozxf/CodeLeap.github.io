import styles from "./PostBox.module.scss";
import { formatDistance } from 'date-fns';
import Delete from "/src/Assets/Delete.svg"
import Edit from "/src/Assets/Edit.svg"
import { GlobalContext } from "../../Context/GlobalContent";
import { useContext } from "react";


export const PostBox = ({title, username, date, content, id, tools }) => {

    const {setModal} = useContext(GlobalContext)


    const now = new Date();
    const datePost = new Date(date);
    const theDate = formatDistance(datePost, now, {addSuffix: true} )

    return (
        <div className={styles.postContainer}>
                <header className={styles.postHeader}>
                    <span>{title}</span>
                    {tools &&  
                    <div className={styles.toolBox}>
                        <img onClick={() => 
                        setModal(id)} 
                        src={Delete} /> 
                        <img src={Edit} /> 
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