import { useState } from "react"
import useStore from "../../../store/store"
import styles from './CarFactoryBuild.module.css'

const CarFactoryBuild = () => {
    const [ building, setBuilding ] = useState(false)

    const carFactorySections = useStore(state => state.carFactorySections)
    let readyToBuild = carFactorySections.every(section => section.selectedValue !== null)

    const handleClick = () => {
        const buildTime = Math.random() * 10000
        setBuilding(true)
        setTimeout(() => {
            setBuilding(false)
        }, buildTime)
    }

    return (
        <>
            { readyToBuild &&
                <section className={styles.CarFactoryBuild}>
                    <h2>That's all we need</h2>
                    <p>Let's build your car</p>
                    <button onClick={ handleClick } 
                            disabled={ building }
                            className={styles.CarFactoryBuildButton}>
                                Build your car
                    </button>
                    { building &&
                        <p>Where's busy building your car...</p>
                    }
                </section>
            }
        </>
    )

}
export default CarFactoryBuild