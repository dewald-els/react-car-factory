import { useEffect } from "react"
import useStore from "../../../store/store"
import CarColoursListItem from "./CarColoursListItem"
import styles from './CarColours.module.css'

const CarColoursList = () => {

    const carColours = useStore(state => state.carColours)
    const fetchAllCarColours = useStore(state => state.fetchAllCarColours)

    useEffect(() => {
        fetchAllCarColours()
    }, [])

    const carColoursList = carColours.map(colour => 
        <CarColoursListItem carColour={ colour } key={ colour.id } />
    )

    return (
        <ul className={ styles.CarColoursList }>
            { carColoursList }
        </ul>
    )
}
export default CarColoursList