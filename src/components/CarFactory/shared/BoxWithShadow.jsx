import styles from './BoxWithShadow.module.css'

const LiBoxWithShadow = ({ children }) => {
    return (
        <li className={styles.BoxWithShadow}>{children}</li>
    )
}
export default LiBoxWithShadow