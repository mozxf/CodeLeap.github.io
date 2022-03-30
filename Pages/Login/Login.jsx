import styles from "./Login.module.scss";
import { useState } from "react";
import { Input } from "../../Components/Input/Input";
import { Button } from "../../Components/Button/Button";

export const Login = () => {
const [username, setUsername] = useState("")

return <section className={styles.container} >
        <form className={styles.loginForm} action="">
            <h2 className={styles.loginTitle}>Welcome to CodeLeap network!</h2>
            
            <Input 
            type="text" 
            label="Please enter your username"
            id="username"
            value={username}
            onChange={({target})=> setUsername(target.value)}
            placeholder="John Doe" />

            <Button type="link" location="/network" disabled={!username} >Enter</Button>
        </form>

    </section>

}