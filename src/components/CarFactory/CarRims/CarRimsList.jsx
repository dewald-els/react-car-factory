import { useEffect } from "react"
import useStore from "../../../store/store"
import CarRimsListItem from "./CarRimsListItem"
import styles from './CarRims.module.css'

const CarRimsList = () => {
    const carRims = useStore(state => state.carRims)
    const fetchAllCarRims = useStore(state => state.fetchAllCarRims)
    useEffect(() => {
        fetchAllCarRims()
    }, [])

    const carRimsList = carRims.map(carRim => 
        <CarRimsListItem carRim={ carRim } key={ carRim.id } />
    )

    return (
        <ul className={ styles.CarRimsList }>
            { carRimsList }
        </ul>
    )
}
export default CarRimsList