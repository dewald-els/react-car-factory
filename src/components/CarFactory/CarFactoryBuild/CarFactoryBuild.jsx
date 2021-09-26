import useStore from "../../../store/store"
import styles from './CarFactoryBuild.module.css'

const CarFactoryBuild = () => {

    const carFactorySections = useStore(state => state.carFactorySections)
    let readyToBuild = carFactorySections.every(section => section.selectedValue !== null)

    return (
        <>
            {readyToBuild &&
                <section className={styles.CarFactoryBuild}>
                    <h2>That's all we need</h2>
                    <p>Let's build your car</p>
                    <button className={styles.CarFactoryBuildButton}>Build your car</button>
                </section>
            }
        </>
    )

}
export default CarFactoryBuild