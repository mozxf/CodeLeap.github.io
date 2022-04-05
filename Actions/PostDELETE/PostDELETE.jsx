import styles from "./PostDELETE.module.scss"
import { Button } from "../../Components/Button/Button"
import { GlobalContext } from "../../Context/GlobalContent"
import { useContext } from "react"



export const PostDELETE = ({show}) => {
    const {deleteId, setDeleteId, setRender, postedMessage, setPostedMessage} = useContext(GlobalContext)
   
    async function deleteData() {

        const options = {
            method : "DELETE"
        }

      const response = await fetch(`https://dev.codeleap.co.uk/careers/${deleteId}/`, options);


        response.ok && setPostedMessage("delete")
        

        setDeleteId("")
        setRender((render) => render + 1)

        }


         if(show) {
            return <section 
            onClick={() => {setDeleteId("") }} 
            className={ styles.container}>
                <div  
                    onClick={event => event.stopPropagation()} 
                     className={styles.modal }>
                <h2 className={styles.modalTitle}>Are you sure you want to delete this item?</h2>
                <div className={styles.wrapper}>

                <Button 
                className={styles.modalButton} 
                onClick={() => setDeleteId("")} type="button">
                    Cancel
                    </Button>
                
                <Button 
                className={styles.modalButton}  
                type="button" 
                onClick={deleteData}>
                    Ok
                    </Button>
            </div>
        </div>
    </section>}

    else return null
}