import styles from "./StatusResponse.module.scss"


export const StatusResponse = ({type}) => {

    let message;
    switch(type) {

        case "delete":
            message = "Your post was deleted successfully!";
            break;

        case "post":
            message = "The post was sent successfully!";
            break;

        case "patch":
            message = "Your post was edited successfully!";
            break;

        default: 
        message = "";
        break;

    }

    if(type) return  (
        <div className={styles.container}>
            <span className={styles.message}>{message}</span>
        </div>)

        else return null
    
}