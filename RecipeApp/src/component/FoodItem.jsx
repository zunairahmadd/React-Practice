import styles from"./fooditem.module.css"

export default function FoodItem({food,setFoodId}){
    return(
        <div className={styles.item}>
            <img className={styles.img} src={food.image} alt=""/>
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
            </div>
            <div className={styles.button}>
            <button onClick={()=>{
                console.log(food.id)
            setFoodId(food.id)
            }}
             className={styles.btn}>View Recipe</button>
            </div>
            </div>
    )
}