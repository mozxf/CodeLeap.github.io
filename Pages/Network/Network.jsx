import styles from "./Network.module.scss";
import { ContentPost } from "../../Actions/ContentPOST/ContentPOST";
import { PostsGET } from "../../Actions/PostsGET/PostsGET";
import { PostDELETE } from "../../Actions/PostDELETE/PostDELETE";

import { GlobalContext } from "../../Context/GlobalContent";
import { useContext } from "react";
import { PostPATCH } from "../../Actions/PostPATCH/PostPATCH";


export const Network = () => {
const {deleteId, editId} = useContext(GlobalContext)


    return  (
        <section className={styles.container} >
            <main className={styles.content} >
            <header className={styles.contentHeader}>CodeLeap Network</header>
            <ContentPost />
            
            <PostsGET />
          
            
            </main>
            <PostDELETE show={deleteId} />
            <PostPATCH show={editId} />
        </section>
    )
}