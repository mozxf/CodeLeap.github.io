import styles from "./Network.module.scss";
import { ContentPost } from "../../Actions/ContentPOST/ContentPOST";
import { PostsGET } from "../../Actions/PostsGET/PostsGET";

export const Network = () => {





    return  (
        <section className={styles.container} >
            <main className={styles.content} >
            <header className={styles.contentHeader}>CodeLeap Network</header>
            <ContentPost />
            
            <PostsGET />
          
            
            </main>
        </section>
    )
}