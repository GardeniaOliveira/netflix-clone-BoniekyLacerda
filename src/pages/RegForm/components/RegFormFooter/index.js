import styles from './styles.module.css'


const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <h5> Questions? Call 800 855 855</h5>

            <div className={styles['footer-links']}>

                <a href="https://github.com/GardeniaOliveira">FAQ</a>
                <a href='https://github.com/GardeniaOliveira' >Help Center</a>
                <a href="https://github.com/GardeniaOliveira">Netflix Shop</a>
                <a href="https://github.com/GardeniaOliveira">Terms of Use</a>
                <a href="https://github.com/GardeniaOliveira">Privacy</a>
                <a href="https://github.com/GardeniaOliveira">Cookie Preferences</a>
                <a href="https://github.com/GardeniaOliveira">Corporate Information</a>
            </div>

            <div className={styles["footer-language"]}>
                <div className="icon">
                    🌐
                </div>
                <select name="language" className={styles['select-language']} >
                    <option value="english">English</option>
                    <option value="Portuguese">Portuguese</option>

                </select>
            </div>


        </footer>
    )
}

export default Footer