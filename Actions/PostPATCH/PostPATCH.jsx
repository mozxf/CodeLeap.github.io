import styles from "./PostPATCH.module.scss";

import { GlobalContext } from "../../Context/GlobalContent";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button/Button";
import {useState, useContext, useEffect} from 'react'

export const PostPATCH = ({show}) => {

    const {setRender, editId, setEditId} = useContext(GlobalContext);
    const [editTitle, setEditTitle] = useState("");
    const [editMessage, setEditMessage] = useState("");

    async function getData(id) {
        const response = await fetch(`https://dev.codeleap.co.uk/careers/${id}/`);

        const json = await response.json()

        setEditTitle(json.title)
        setEditMessage(json.content)

    } 
    useEffect(() => {

        editId && getData(editId)

    }, [editId])

    async function sendData() {

        const patchData = {
            content: editMessage, title: editTitle  
         }

        const options = {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            
            body: JSON.stringify(patchData)
    }

        const response = await fetch(`https://dev.codeleap.co.uk/careers/${editId}/`, options);
        console.log(response)

        const json = await response.json();
        console.log(json)

       
        
        setEditTitle("")
        setEditMessage("")
        setEditId("")
        setRender(render => ++render)


    }
   


    function handleSubmit(event) {
        event.preventDefault();

        
        sendData()

           
    }



if(show) return( 

<section onClick={() => {setEditId("")}} className={styles.modalWrapper}>
    <form onClick={(event) => {event.stopPropagation()}} onSubmit={handleSubmit} className={styles.formPatch} action="">
    <h2 className={styles.formPatchTitle}>Edit post</h2>
    <Input
    type="text"
    id="title"
    value={editTitle}
    onChange={({target}) => setEditTitle(target.value)}
    label="Title" />
    <Input
    type="textarea"
    id="message"
    value={editMessage}
    onChange={({target}) => setEditMessage(target.value)}
    label="Message"
    rows="3"
     />
    <Button
    disabled={!title && !message}
    type="button"
    >
        Save
    </Button>
    </form>
</section>

)

else return null

}