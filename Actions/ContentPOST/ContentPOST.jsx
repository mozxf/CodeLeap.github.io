import styles from "./ContentPOST.module.scss"

import { Input } from "../../Components/Input/Input"
import { Button } from "../../Components/Button/Button"
import { GlobalContext } from "../../Context/GlobalContent"

import { useState, useContext, useEffect } from "react"

export const ContentPost = () => {
    const {username, setRender} = useContext(GlobalContext);
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const postData = {
       content:message, title, username 
    }

   


    function handleSubmit(event) {
        event.preventDefault();

            const options = {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                
                body: JSON.stringify(postData)
        }

            fetch('https://dev.codeleap.co.uk/careers/', options)

            .then(response => {
                console.log(response)
                return response.json()
            })

            .then(json => {
                console.log(json)
            })
            setTitle("")
            setMessage("")
        setRender(render => ++render)
    }


return (
    <form onSubmit={handleSubmit} className={styles.formPost} action="">
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
                type="button"
                >
                    Create
                </Button>
            </form>
)

}