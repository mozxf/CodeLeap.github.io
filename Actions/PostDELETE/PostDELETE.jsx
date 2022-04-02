import styles from "./PostDELETE.module.scss"
import { Button } from "../../Components/Button/Button"
import { GlobalContext } from "../../Context/GlobalContent"
import { useContext } from "react"



export const PostDELETE = ({show}) => {
    const {modal, setModal, setRender} = useContext(GlobalContext)

    if(show) {return <section className={ styles.container}>
        <div className={styles.modal }>
            <h2 className={styles.modalTitle}>Are you sure you want to delete this item?</h2>
            <div className={styles.wrapper}>
                <Button onClick={() => setModal(false)} type="button">Cancel</Button>
                <Button type="button" onClick={() => {
                    const options = {
                        method : "DELETE"
                    }

                    fetch(`https://dev.codeleap.co.uk/careers/${modal}/`, options)
                    .then(response => {
                        console.log(response)
                        return response.json()
                    })
                    
                    .then(json => console.log(json))

                    setRender((render) => ++render)
                    setModal(false)

                }
                    }>Ok</Button>
            </div>
        </div>
    </section>}

    else return null
}