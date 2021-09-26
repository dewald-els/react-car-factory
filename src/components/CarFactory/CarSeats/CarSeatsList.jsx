import { useEffect } from "react"
import useStore from "../../../store/store"
import CarSeatsListItem from "./CarSeatsListItem"
import styles from './CarSeats.module.css'

const CarSeatsList = () => {

    const carSeats = useStore(state => state.carSeats)
    const fetchAllCarSeats = useStore(state => state.fetchAllCarSeats)

    useEffect(() => {
        fetchAllCarSeats()
    }, [])

    const carSeatsList = carSeats.map(carSeat => 
        <CarSeatsListItem carSeat={ carSeat } key={ carSeat.id } />
    )

    return (
        <ul className={ styles.CarSeatsList }>{ carSeatsList }</ul>
    )
}
export default CarSeatsList