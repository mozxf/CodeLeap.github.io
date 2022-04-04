import styles from "./PostDELETE.module.scss"
import { Button } from "../../Components/Button/Button"
import { GlobalContext } from "../../Context/GlobalContent"
import { useContext } from "react"



export const PostDELETE = ({show}) => {
    const {modal, setModal, setRender} = useContext(GlobalContext)

    async function deleteData() {

        const options = {
            method : "DELETE"
        }

      const response = await  fetch(`https://dev.codeleap.co.uk/careers/${modal}/`, options);

        console.log(response)
        

        setModal(false)
        setRender((render) => render + 1)

        }

    if(show) {return <section className={ styles.container}>
        <div className={styles.modal }>
            <h2 className={styles.modalTitle}>Are you sure you want to delete this item?</h2>
            <div className={styles.wrapper}>
                <Button className={styles.deleteModalButton} onClick={() => setModal(false)} type="button">Cancel</Button>
                
                <Button className={styles.deleteModalButton}  type="button" onClick={deleteData}
                    

                
                    >Ok</Button>
            </div>
        </div>
    </section>}

    else return null
}