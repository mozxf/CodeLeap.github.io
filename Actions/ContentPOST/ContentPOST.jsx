import styles from "./ContentPOST.module.scss"

import { Input } from "../../Components/Input/Input"
import { Button } from "../../Components/Button/Button"
import { GlobalContext } from "../../Context/GlobalContent"

import { useState, useContext } from "react"

export const ContentPOST = () => {
    const {username, setRender, setPostedMessage} = useContext(GlobalContext);
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    
    
    

    async function sendData() {
        const postData = {
            content:message, title, username 
         }

        const options = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            
            body: JSON.stringify(postData)
    }

        const response = await fetch('https://dev.codeleap.co.uk/careers/', options);


       response.ok && setPostedMessage("post")

        
        setTitle("")
        setMessage("")
        setRender(render => ++render)


    }
   
    


    function handleSubmit(event) {
        event.preventDefault();
        sendData()
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