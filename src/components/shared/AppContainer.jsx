import styles from './AppContainer.module.css'

const AppContainer = ({ children }) => {
    return (
        <div className={ styles.AppContainer }>{ children }</div>
    )
}
export default AppContainer