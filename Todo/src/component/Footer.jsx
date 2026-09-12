import styles from "./footer.module.css"

export default function Footer({completedTodos,totaltodo}){
return (
    <div className={styles.footer}>
        <span className={styles.item}>Completed Todo:{completedTodos}</span>
        <span className={styles.item}>Total Todo:{totaltodo}</span>
    </div>
)
}