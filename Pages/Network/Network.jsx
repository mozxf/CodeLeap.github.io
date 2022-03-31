import styles from "./Network.module.scss"
import { GlobalContext } from "../../Context/GlobalContent"
import { useContext, useState, useEffect } from "react"
import { Input } from "../../Components/Input/Input"
import { Button } from "../../Components/Button/Button"

export const Network = () => {
const {username} = useContext(GlobalContext)
const [title, setTitle] = useState("");
const [message, setMessage] = useState("");
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
            <form className={styles.formPost} action="">
            <fieldset className={styles.formPostWrapper}>
                <h2 className={styles.formPostTitle}>What's on your mind?</h2>
                <Input 
                type="text" 
                id="title" 
                value={title} 
                onChange={({target}) => setTitle(target.value)} placeholder="Hello world!" 
                label="Title" />

                <Input 
                type="textarea" 
                id="message" 
                value={message} 
                onChange={({target}) => setMessage(target.value)} placeholder="Your message here!" 
                label="Message"
                rows="3"
                 />

                <Button 
                disabled={!title || !message} 
                type="button" >
                    Create
                </Button>
            </fieldset>
            </form>

            <div className={styles.postWrapper}>
                <header className={styles.postHeader}>Title</header>
                <span className={styles.postUsername}>Username</span>
                <span className={styles.postTime}>time</span>
                <p className={styles.postContent}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident nulla assumenda a soluta ad libero officiis necessitatibus eum amet. Tempore distinctio eveniet aut repudiandae esse numquam corporis. Itaque, maxime illo.</p>
            </div>
            
            </main>
        </section>
    )
}