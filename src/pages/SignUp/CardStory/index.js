import styles from './styles.module.css'


const CardStory = ({ title, description, img }) => {
    return (
        <div className={styles["card-container"]}>
            <div className={styles["card-content"]}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className={styles["card-img"]}>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default CardStory