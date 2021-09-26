import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import useStore from "../../../store/store"
import styles from './CarFactoryBuild.module.css'

const CarFactoryBuild = () => {
    const [ state, setState ] = useState({
        building: false,
        complete: false
    })

    const history = useHistory()

    const carFactorySections = useStore(state => state.carFactorySections)
    let readyToBuild = carFactorySections.every(section => section.selectedValue !== null)

    const handleClick = () => {
        const buildTime = Math.random() * 10000
        setState({
            ...state,
            building: true
        })
        setTimeout(() => {
            setState({
                building: false,
                complete: true
            })
        }, buildTime)
    }

    useEffect(() => {

        if (state.complete) {
            history.push('/factory/complete')
        }

    }, [ state ])

    return (
        <>
            { readyToBuild &&
                <section className={styles.CarFactoryBuild}>
                    <h2>That's all we need</h2>
                    <p>Let's build your car</p>
                    <button onClick={ handleClick } 
                            disabled={ state.building }
                            className={styles.CarFactoryBuildButton}>
                                Build your car
                    </button>
                    { state.building &&
                        <p>We're busy building your car...</p>
                    }
                </section>
            }
        </>
    )

}
export default CarFactoryBuild