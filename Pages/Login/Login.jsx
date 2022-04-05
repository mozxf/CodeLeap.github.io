import styles from "./Login.module.scss";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button/Button";
import { GlobalContext } from "../../Context/GlobalContent";

import { useContext } from "react";
import {useNavigate} from "react-router-dom";



export const Login = () => {
const {username, saveUsername, setUsername} = useContext(GlobalContext)
const navigate = useNavigate();

function handleSubmit(event) {
    event.preventDefault();
    navigate("/network")
}


return <section onSubmit={handleSubmit} className={styles.container} >
        <form className={styles.loginForm} action="">
            <h2 className={styles.loginTitle}>Welcome to CodeLeap network!</h2>
            
            <Input 
            type="text" 
            label="Please enter your username"
            id="username"
            value={username}
            onChange={({target})=> {
                setUsername(target.value)
                saveUsername(target.value)
            }}
            placeholder="John Doe" />

            <Button type="link" location="/network" disabled={!username} >Enter</Button>
        </form>

    </section>

}