import styles from "./Input.module.scss";

export const Input = ({id, label, type, value, onChange, placeholder}) => {

return <>
    <label htmlFor={id}>{label}</label>
    <input
    className={styles.input} 
    type={type}
    value={value}
    id={id}
    onChange={onChange}
    placeholder={placeholder} />
</>

}