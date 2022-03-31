import styles from "./Input.module.scss";

export const Input = ({id, label, type, value, onChange, placeholder, rows}) => {

if(type ==="text" ||type === "passord" || type === "email") {
    return <div className={styles.inputWrapper}>
    <label htmlFor={id}>{label}</label>
         <input
         className={styles.input} 
         type={type}
         value={value}
         id={id}
         onChange={onChange}
         placeholder={placeholder} />
</div>
}

if(type === "textarea") {
    return <div className={styles.inputWrapper}>
    <label htmlFor={id}>{label}</label>
         <textarea
         className={styles.input} 
         type={type}
         value={value}
         id={id}
         onChange={onChange}
         placeholder={placeholder}
         rows={rows}></ textarea >
</div>
}

else return null
}