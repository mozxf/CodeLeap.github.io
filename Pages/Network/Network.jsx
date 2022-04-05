import styles from "./Network.module.scss";
import { ContentPOST } from "../../Actions/ContentPOST/ContentPOST";
import { PostsGET } from "../../Actions/PostsGET/PostsGET";
import { PostDELETE } from "../../Actions/PostDELETE/PostDELETE";

import { GlobalContext } from "../../Context/GlobalContent";
import { useContext } from "react";
import { PostPATCH } from "../../Actions/PostPATCH/PostPATCH";
import { StatusResponse } from "../../Components/StatusResponse/StatusResponse";


export const Network = () => {
const {deleteId, editId, postedMessage, setPostedMessage} = useContext(GlobalContext)

if(postedMessage) {
    setTimeout(() => {
        setPostedMessage("")
    }, 2500)
}
    return  (
        <section className={styles.container} >
            <main className={styles.content} >
            <header className={styles.contentHeader}>CodeLeap Network</header>

            <ContentPOST />
            <PostsGET />
            
            <StatusResponse type={postedMessage} />
            <PostDELETE show={deleteId} />
            <PostPATCH show={editId} />
            </main>
        </section>
    )
}