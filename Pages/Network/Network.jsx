import styles from "./Network.module.scss";
import { GlobalContext } from "../../Context/GlobalContent";
import { useContext, useState, useEffect } from "react";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button/Button";
import { PostBox } from "../../Components/PostBox/PostBox";

import { ContentPost } from "../../Actions/ContentPOST/ContentPOST";
import { PostsGET } from "../../Actions/PostsGET/PostsGET";

export const Network = () => {
const {username} = useContext(GlobalContext)
const [data, setData] = useState(null)

useEffect(() => {

    async function getData() {
    const response = await fetch('https://dev.codeleap.co.uk/careers/');

    const jsonData = await response.json();

    setData(jsonData.results)

    }
    getData()
}, [])

console.log(data)


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